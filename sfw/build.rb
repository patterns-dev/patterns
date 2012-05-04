require 'rubygems'
require 'json'
require 'nokogiri'

def random
  (1..16).collect {(rand*16).floor.to_s(16)}.join ''
end

def slug title
  title.gsub(/\s/, '-').gsub(/[^A-Za-z0-9-]/, '').downcase()
end

def clean text
  text.gsub(/’/,"'")
end

def url text
  text.gsub(/(http:\/\/)?([a-zA-Z0-9._-]+?\.(net|com|org|edu)(\/[^ )]+)?)/,'[http:\/\/\2 \2]')
end

def create title
  {'type' => 'create', 'id' => random, 'item' => {'title' => title}}
end 

def paragraph text
  {'type' => 'paragraph', 'text' => text, 'id' => random()}
end

def page title, story
  puts "#{title}: #{story.length}"
  page = {'title' => title, 'story' => story, 'journal' => [create(title)]}
  File.open("../../pages/#{slug(title)}", 'w') do |file| 
    file.write JSON.pretty_generate(page)
  end
end

def encode_base64 bin
	[bin].pack('m').gsub(/\s/, '')
end

def image data, caption
  bin = encode_base64 data
  {'type' => 'image', 'id' => random(), 'url' => "data:image/jpg;base64,#{bin}", 'text' => caption}
end

def titleize string
  words = string.gsub(/^\d+ */,'').gsub(/ *\(\d+\)$/,'')
  return words.split(" ").map {|word| word.capitalize}.join(" ")
end

def span doc, string
  s = doc.create_element 'span'
  s.content = string
  return s
end

titles = {}
docs = {}

Dir.glob('../clean2/apl*/*.htm').each do |path|
  path =~ /apl(\d+)\//
  docs[$1.to_i] = doc = Nokogiri::HTML(File.read(path))
  titles[$1.to_i] = titleize doc.title
end

docs.each do |n, doc|
  
  # convert 'a' to internal links
  doc.css('a').each do |a|
    next unless a.attr('href') =~ /apl(\d+)\//
    a.replace span doc, "[[#{titles[$1.to_i]}]]"
  end

  # convert 'p img' to 'img' with caption
  p = doc.css('p')
  pi = p.select {|e| img = e.css('img'); img.length > 0 && img[0].attr('src')!='../threedots.jpg' }
  pi.each do |pe|
    img = pe.css('img')
    i = p.index(pe)
    caption = p[i+1].css('i')
    if caption.length > 0
      img.attr('title',caption[0].content)
      p[i+1].remove
    else
      img.attr('title', titles[n])
    end
  end
    
  # convert 'td p' to 'td'
  doc.css('td p').each do |p|
    p.replace span doc, p.content
  end

  # convert 'table' to 'p'
  doc.css('table').each do |t|
    p = doc.create_element 'p'
    p.content = "Table Omitted"
    t.replace p
  end

  # build json for each 'p' 
  story = doc.css('p').collect do |p|
    img = p.css('img')
    if img.length > 0
      src = img[0].attr('src').downcase
      if src == '../threedots.jpg' then
        paragraph "<center>❖ ❖ ❖</center>"
      else
        begin
          data = File.read "../clean2/apl#{n}/#{src}"
          # puts "#{img[0].attr('src')}: #{data.length}"
          image data, img.attr('title')
        rescue Exception => e
          paragraph "<font color=red>#{e}</font>"
        end
      end
    else
      paragraph p.inner_html
    end
  end
  page titles[n], story
  
end

spec = [

  ["Towns", 
    [[2,"Regions instead of countries"],
    [8,"Regional policies"],
    [12,"Major structures which define the city"],
    [16,"Communities and neighborhoods"],
    [21,"Community networks"],
    [28,"Character of local environments"],
    [35,"Local centers"],
    [41,"Housing"],
    [49,"Work"],
    [58,"Local road and path network"],
    [67,"Public open land"],
    [75,"Local common land"],
    [80,"Transformation of the family"],
    [87,"Transformation of work and learning"]]],
  
  ["Buildings",
    [[95,"Transformation of local shops and gathering places"],
    [104,"The overall arangement of a group of buildings"],
    [110,"The position of individual buildings"],
    [119,"Entrances, gardens, courtyards, roofs and terraces"],
    [127,"Paths and squares"],
    [136,"Gradients and connection of space"],
    [146,"The most important areas and rooms (in a house)"],
    [153,"The most important areas and rooms (in offices, workshops and public buildings)"],
    [159,"Outbuildings and access to the street and gardens"],
    [169,"Knit the inside of the building to the outside"],
    [179,"Arrange the gardens, and the places in the gardens"],
    [190,"Inside, attach necessary minor rooms and alcoves"],
    [197,"Fine tune the shape and size of rooms and alcoves "]]],
  
  ["Construction",
    [[205,"Give the walls some depth"],
    [209,"Let the structure grow directly from your plans and your conception of the buildings"],
    [214,"Work out the complete structural layout"],
    [221,"Mark the column locations and erect the main frame"],
    [226,"Fix the exact positions for openings and frame them"],
    [233,"Put in the following subsidiary patterns"],
    [241,"Put in the surfaces and indoor details"],
    [249,"Build outdoor details"],
    [254,"Complete the Building"]]]]

# build json for categories
n = 1
story = spec.collect do |section|
  story = section[1].collect do |chapter|
    story = (n..chapter[0]-1).collect {|k| paragraph "#{k}. [[#{titles[k]}]]"}
    m = n
    n = chapter[0]
    page chapter[1], story
    paragraph "#{m}-#{n-1}. [[#{chapter[1]}]]"
  end
  page section[0], story
  paragraph "[[#{section[0]}]]"
end
page "A Pattern Language", story
