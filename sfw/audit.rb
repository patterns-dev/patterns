require 'rubygems'
require 'nokogiri'

Dir.glob('../clean2/apl*/*.htm') do |path|
  doc = Nokogiri::HTML(File.read(path))
  title = doc.css('title')[0].content
  doc.css('a').each do |a|
    next if a.content =~ /^[A-Z 0-9()'-]+$/
    puts "    #{title}" if title
    title = false
    puts "        #{a.content}"
  end
end