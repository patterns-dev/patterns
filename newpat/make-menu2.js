var dd = document.body.id; console.log('1: ', dd);
var menuSourceString = '<a href="../newpat0/new-patterns-introduction.htm">Introduction</a><br><br>' +
 'Towns<br>' +
'<a href="../newpat1/newpat1.htm" id="pat1" onclick="JavaScript:showIt( dd );" >1 Independent Regions</a><br>' +
'<a href="../newpat2/newpat2.htm" id="pat2" onclick="JavaScript:showIt( dd );" >2 The Distribution of Towns</a><br>' +
'<a href="../newpat3/newpat3.htm" id="pat3" onclick="JavaScript:showIt( dd );" >3 City Country Fingers</a><br>' +
'<a href="../newpat4/newpat4.htm" id="pat4" onclick="JavaScript:showIt( dd );" >4 Agricultural Valleys</a><br>' +
'<a href="../newpat5/newpat5.htm" id="pat5" onclick="JavaScript:showIt( dd );" >5 Lace of Country Streets</a><br>' +
'<a href="../newpat6/newpat6.htm" id="pat6" onclick="JavaScript:showIt( dd );" >6 Country Towns</a><br>' +
'<a href="../newpat7/newpat7.htm" id="pat7" onclick="JavaScript:showIt( dd );" >7 The Countryside</a><br>' +
'<a href="../newpat8/newpat8.htm" id="pat8" onclick="JavaScript:showIt( dd );" >8 Mosaic of Subcultures</a><br>' +
'<a href="../newpat9/newpat9.htm" id="pat9" onclick="JavaScript:showIt( dd );" >9 Scattered Work</a><br>' +
'<a href="../newpat10/newpat10.htm" id="pat10" onclick="JavaScript:showIt( dd );" >10 Magic of the City</a><br>' +
'<a href="../newpat11/newpat11.htm" id="pat11" onclick="JavaScript:showIt( dd );" >11 Local Transport Areas</a><br>' +
'<a href="../newpat12/newpat12.htm" id="pat12" onclick="JavaScript:showIt( dd );" >12 Community of 7000</a><br>' +
'<a href="../newpat13/newpat13.htm" id="pat13" onclick="JavaScript:showIt( dd );" >13 Subculture Boundary</a><br>' +
'<a href="../newpat14/newpat14.htm" id="pat14" onclick="JavaScript:showIt( dd );" >14 Identifiable Neighborhood</a><br>' +
'<a href="../newpat15/newpat15.htm" id="pat15" onclick="JavaScript:showIt( dd );" >15 Neighborhood Boundary</a><br>' +
'<a href="../newpat16/newpat16.htm" id="pat16" onclick="JavaScript:showIt( dd );" >16 Web of Public Transportation</a><br>' +
'<a href="../newpat17/newpat17.htm" id="pat17" onclick="JavaScript:showIt( dd );" >17 Ring Roads</a><br>' +
'<a href="../newpat18/newpat18.htm" id="pat18" onclick="JavaScript:showIt( dd );" >18 Network of Learning</a><br>' +
'<a href="../newpat19/newpat19.htm" id="pat19" onclick="JavaScript:showIt( dd );" >19 Web of Shopping</a><br>' +
'<a href="../newpat20/newpat20.htm" id="pat20" onclick="JavaScript:showIt( dd );" >20 Mini-buses</a><br>' +
'<a href="../newpat21/newpat21.htm" id="pat21" onclick="JavaScript:showIt( dd );" >21 Four-story Limit</a><br>' +
'<a href="../newpat22/newpat22.htm" id="pat22" onclick="JavaScript:showIt( dd );" >22 Nine Per Cent Parking</a><br>' +
'<a href="../newpat23/newpat23.htm" id="pat23" onclick="JavaScript:showIt( dd );" >23 Parallel Roads</a><br>' +
'<a href="../newpat24/newpat24.htm" id="pat24" onclick="JavaScript:showIt( dd );" >24 Sacred Sites</a><br>' +
'<a href="../newpat25/newpat25.htm" id="pat25" onclick="JavaScript:showIt( dd );" >25 Access to Water</a><br>' +
'<a href="../newpat26/newpat26.htm" id="pat26" onclick="JavaScript:showIt( dd );" >26 Life Cycle</a><br>' +
'<a href="../newpat27/newpat27.htm" id="pat27" onclick="JavaScript:showIt( dd );" >27 Men and Women</a><br>' +
'<a href="../newpat28/newpat28.htm" id="pat28" onclick="JavaScript:showIt( dd );" >28 Eccentric Nucleus</a><br>' +
'<a href="../newpat29/newpat29.htm" id="pat29" onclick="JavaScript:showIt( dd );" >29 Density Rings</a><br>' +
'<a href="../newpat30/newpat30.htm" id="pat30" onclick="JavaScript:showIt( dd );" >30 Activity Nodes</a><br>' +
'<a href="../newpat31/newpat31.htm" id="pat31" onclick="JavaScript:showIt( dd );" >31 Promenade</a><br>' +
'<a href="../newpat32/newpat32.htm" id="pat32" onclick="JavaScript:showIt( dd );" >32 Shopping Street</a><br>' +
'<a href="../newpat33/newpat33.htm" id="pat33" onclick="JavaScript:showIt( dd );" >33 Night Life</a><br>' +
'<a href="../newpat34/newpat34.htm" id="pat34" onclick="JavaScript:showIt( dd );" >34 Interchange</a><br>' +
'<a href="../newpat35/newpat35.htm" id="pat35" onclick="JavaScript:showIt( dd );" >35 Household Mix</a><br>' +
'<a href="../newpat36/newpat36.htm" id="pat36" onclick="JavaScript:showIt( dd );" >36 Degrees of Publicness</a><br>' +
'<a href="../newpat37/newpat37.htm" id="pat37" onclick="JavaScript:showIt( dd );" >37 House Cluster</a><br>' +
'<a href="../newpat38/newpat38.htm" id="pat38" onclick="JavaScript:showIt( dd );" >38 Row Houses</a><br>' +
'<a href="../newpat39/newpat39.htm" id="pat39" onclick="JavaScript:showIt( dd );" >39 Housing Hill</a><br>' +
'<a href="../newpat40/newpat40.htm" id="pat40" onclick="JavaScript:showIt( dd );" >40 Old People Everywhere</a><br>' +
'<a href="../newpat41/newpat41.htm" id="pat41" onclick="JavaScript:showIt( dd );" >41 Work Community</a><br>' +
'<a href="../newpat42/newpat42.htm" id="pat42" onclick="JavaScript:showIt( dd );" >42 Industrial Ribbon</a><br>' +
'<a href="../newpat43/newpat43.htm" id="pat43" onclick="JavaScript:showIt( dd );" >43 University as Marketplace</a><br>' +
'<a href="../newpat44/newpat44.htm" id="pat44" onclick="JavaScript:showIt( dd );" >44 Local Town Hall</a><br>' +
'<a href="../newpat45/newpat45.htm" id="pat45" onclick="JavaScript:showIt( dd );" >45 Necklace of Community Projects</a><br>' +
'<a href="../newpat46/newpat46.htm" id="pat46" onclick="JavaScript:showIt( dd );" >46 Market of Many Shops</a><br>' +
'<a href="../newpat47/newpat47.htm" id="pat47" onclick="JavaScript:showIt( dd );" >47 Health Center</a><br>' +
'<a href="../newpat48/newpat48.htm" id="pat48" onclick="JavaScript:showIt( dd );" >48 Housing in Between</a><br>' +
'<a href="../newpat49/newpat49.htm" id="pat49" onclick="JavaScript:showIt( dd );" >49 Looped Local Roads</a><br>' +
'<a href="../newpat50/newpat50.htm" id="pat50" onclick="JavaScript:showIt( dd );" >50 T Junctions</a><br>' +
'<a href="../newpat51/newpat51.htm" id="pat51" onclick="JavaScript:showIt( dd );" >51 Green Streets</a><br>' +
'<a href="../newpat52/newpat52.htm" id="pat52" onclick="JavaScript:showIt( dd );" >52 Network of Paths and Cars</a><br>' +
'<a href="../newpat53/newpat53.htm" id="pat53" onclick="JavaScript:showIt( dd );" >53 Main Gateways</a><br>' +
'<a href="../newpat54/newpat54.htm" id="pat54" onclick="JavaScript:showIt( dd );" >54 Road Crossing</a><br>' +
'<a href="../newpat55/newpat55.htm" id="pat55" onclick="JavaScript:showIt( dd );" >55 Raised Walk</a><br>' +
'<a href="../newpat56/newpat56.htm" id="pat56" onclick="JavaScript:showIt( dd );" >56 Bike Paths and Racks</a><br>' +
'<a href="../newpat57/newpat57.htm" id="pat57" onclick="JavaScript:showIt( dd );" >57 Children in the City</a><br>' +
'<a href="../newpat58/newpat58.htm" id="pat58" onclick="JavaScript:showIt( dd );" >58 Carnival</a><br>' +
'<a href="../newpat59/newpat59.htm" id="pat59" onclick="JavaScript:showIt( dd );" >59 Quiet Backs</a><br>' +
'<a href="../newpat60/newpat60.htm" id="pat60" onclick="JavaScript:showIt( dd );" >60 Accessible Green</a><br>' +
'<a href="../newpat61/newpat61.htm" id="pat61" onclick="JavaScript:showIt( dd );" >61 Small Public Squares</a><br>' +
'<a href="../newpat62/newpat62.htm" id="pat62" onclick="JavaScript:showIt( dd );" >62 High Places</a><br>' +
'<a href="../newpat63/newpat63.htm" id="pat63" onclick="JavaScript:showIt( dd );" >63 Dancing in the Streets</a><br>' +
'<a href="../newpat64/newpat64.htm" id="pat64" onclick="JavaScript:showIt( dd );" >64 Pools and Streams</a><br>' +
'<a href="../newpat65/newpat65.htm" id="pat65" onclick="JavaScript:showIt( dd );" >65 Birth Places</a><br>' +
'<a href="../newpat66/newpat66.htm" id="pat66" onclick="JavaScript:showIt( dd );" >66 Holy Ground</a><br>' +
'<a href="../newpat67/newpat67.htm" id="pat67" onclick="JavaScript:showIt( dd );" >67 Common Land</a><br>' +
'<a href="../newpat68/newpat68.htm" id="pat68" onclick="JavaScript:showIt( dd );" >68 Connected Play</a><br>' +
'<a href="../newpat69/newpat69.htm" id="pat69" onclick="JavaScript:showIt( dd );" >69 Public Outdoor Room</a><br>' +
'<a href="../newpat70/newpat70.htm" id="pat70" onclick="JavaScript:showIt( dd );" >70 Grave Sites</a><br>' +
'<a href="../newpat71/newpat71.htm" id="pat71" onclick="JavaScript:showIt( dd );" >71 Still Water</a><br>' +
'<a href="../newpat72/newpat72.htm" id="pat72" onclick="JavaScript:showIt( dd );" >72 Local Sports</a><br>' +
'<a href="../newpat73/newpat73.htm" id="pat73" onclick="JavaScript:showIt( dd );" >73 Adventure Playground</a><br>' +
'<a href="../newpat74/newpat74.htm" id="pat74" onclick="JavaScript:showIt( dd );" >74 Animals</a><br>' +
'<a href="../newpat75/newpat75.htm" id="pat75" onclick="JavaScript:showIt( dd );" >75 The Family</a><br>' +
'<a href="../newpat76/newpat76.htm" id="pat76" onclick="JavaScript:showIt( dd );" >76 House for a Small Family</a><br>' +
'<a href="../newpat77/newpat77.htm" id="pat77" onclick="JavaScript:showIt( dd );" >77 House for a Couple</a><br>' +
'<a href="../newpat78/newpat78.htm" id="pat78" onclick="JavaScript:showIt( dd );" >78 House for One Person</a><br>' +
'<a href="../newpat79/newpat79.htm" id="pat79" onclick="JavaScript:showIt( dd );" >79 Your Own Home</a><br>' +
'<a href="../newpat80/newpat80.htm" id="pat80" onclick="JavaScript:showIt( dd );" >80 Self-governing Workshops and Offices</a><br>' +
'<a href="../newpat81/newpat81.htm" id="pat81" onclick="JavaScript:showIt( dd );" >81 Small Services without Red Tape</a><br>' +
'<a href="../newpat82/newpat82.htm" id="pat82" onclick="JavaScript:showIt( dd );" >82 Office Connections</a><br>' +
'<a href="../newpat83/newpat83.htm" id="pat83" onclick="JavaScript:showIt( dd );" >83 Master and Aprentices</a><br>' +
'<a href="../newpat84/newpat84.htm" id="pat84" onclick="JavaScript:showIt( dd );" >84 Teenage Society</a><br>' +
'<a href="../newpat85/newpat85.htm" id="pat85" onclick="JavaScript:showIt( dd );" >85 Shopfront Schools</a><br>' +
'<a href="../newpat86/newpat86.htm" id="pat86" onclick="JavaScript:showIt( dd );" >86 Children&apos;s Home</a><br>' +
'<a href="../newpat87/newpat87.htm" id="pat87" onclick="JavaScript:showIt( dd );" >87 Individually Owned Shops</a><br>' +
'<a href="../newpat88/newpat88.htm" id="pat88" onclick="JavaScript:showIt( dd );" >88 Street Cafe</a><br>' +
'<a href="../newpat89/newpat89.htm" id="pat89" onclick="JavaScript:showIt( dd );" >89 Corner Grocery</a><br>' +
'<a href="../newpat90/newpat90.htm" id="pat90" onclick="JavaScript:showIt( dd );" >90 Beer Hall</a><br>' +
'<a href="../newpat91/newpat91.htm" id="pat91" onclick="JavaScript:showIt( dd );" >91 Traveller&apos;s Inn</a><br>' +
'<a href="../newpat92/newpat92.htm" id="pat92" onclick="JavaScript:showIt( dd );" >92 Bus Stop</a><br>' +
'<a href="../newpat93/newpat93.htm" id="pat93" onclick="JavaScript:showIt( dd );" >93 Food Stands</a><br>' +
'<a href="../newpat94/newpat94.htm" id="pat94" onclick="JavaScript:showIt( dd );" >94 Sleeping in Public</a><br>' +
'<br>Buildings<br>' +
'<a href="../newpat95/newpat95.htm" id="pat95" onclick="JavaScript:showIt( dd );" >95 Building Complex</a><br>' +
'<a href="../newpat96/newpat96.htm" id="pat96" onclick="JavaScript:showIt( dd );" >96 Number of Stories</a><br>' +
'<a href="../newpat97/newpat97.htm" id="pat97" onclick="JavaScript:showIt( dd );" >97 Shielded Parking</a><br>' +
'<a href="../newpat98/newpat98.htm" id="pat98" onclick="JavaScript:showIt( dd );" >98 Circulation Realms</a><br>' +
'<a href="../newpat99/newpat99.htm" id="pat99" onclick="JavaScript:showIt( dd );" >99 Main Building</a><br>' +
'<a href="../newpat100/newpat100.htm" id="pat100" onclick="JavaScript:showIt( dd );" >100 Pedestrian Street</a><br>' +
'<a href="../newpat101/newpat101.htm" id="pat101" onclick="JavaScript:showIt( dd );" >101 Building Thoroughfare</a><br>' +
'<a href="../newpat102/newpat102.htm" id="pat102" onclick="JavaScript:showIt( dd );" >102 Family of Entrances</a><br>' +
'<a href="../newpat103/newpat103.htm" id="pat103" onclick="JavaScript:showIt( dd );" >103 Small Parking Lots</a><br>' +
'<a href="../newpat104/newpat104.htm" id="pat104" onclick="JavaScript:showIt( dd );" >104 Site Repair</a><br>' +
'<a href="../newpat105/newpat105.htm" id="pat105" onclick="JavaScript:showIt( dd );" >105 South Facing Outdoors</a><br>' +
'<a href="../newpat106/newpat106.htm" id="pat106" onclick="JavaScript:showIt( dd );" >106 Positive Outdoor Space</a><br>' +
'<a href="../newpat107/newpat107.htm" id="pat107" onclick="JavaScript:showIt( dd );" >107 Wings of Light</a><br>' +
'<a href="../newpat108/newpat108.htm" id="pat108" onclick="JavaScript:showIt( dd );" >108 Connected Buildings</a><br>' +
'<a href="../newpat109/newpat109.htm" id="pat109" onclick="JavaScript:showIt( dd );" >109 Long Thin House</a><br>' +
'<a href="../newpat110/newpat110.htm" id="pat110" onclick="JavaScript:showIt( dd );" >110 Main Entrance</a><br>' +
'<a href="../newpat111/newpat111.htm" id="pat111" onclick="JavaScript:showIt( dd );" >111 Half-hidden Garden</a><br>' +
'<a href="../newpat112/newpat112.htm" id="pat112" onclick="JavaScript:showIt( dd );" >112 Entrance Transition</a><br>' +
'<a href="../newpat113/newpat113.htm" id="pat113" onclick="JavaScript:showIt( dd );" >113 Car Connection</a><br>' +
'<a href="../newpat114/newpat114.htm" id="pat114" onclick="JavaScript:showIt( dd );" >114 Hierarchy of Open Space</a><br>' +
'<a href="../newpat115/newpat115.htm" id="pat115" onclick="JavaScript:showIt( dd );" >115 Courtyards which Live</a><br>' +
'<a href="../newpat116/newpat116.htm" id="pat116" onclick="JavaScript:showIt( dd );" >116 Cascade of Roofs</a><br>' +
'<a href="../newpat117/newpat117.htm" id="pat117" onclick="JavaScript:showIt( dd );" >117 Sheltering Roof</a><br>' +
'<a href="../newpat118/newpat118.htm" id="pat118" onclick="JavaScript:showIt( dd );" >118 Roof Garden</a><br>' +
'<a href="../newpat119/newpat119.htm" id="pat119" onclick="JavaScript:showIt( dd );" >119 Arcades</a><br>' +
'<a href="../newpat120/newpat120.htm" id="pat120" onclick="JavaScript:showIt( dd );" >120 Paths and Goals</a><br>' +
'<a href="../newpat121/newpat121.htm" id="pat121" onclick="JavaScript:showIt( dd );" >121 Path Shape</a><br>' +
'<a href="../newpat122/newpat122.htm" id="pat122" onclick="JavaScript:showIt( dd );" >122 Building Fronts</a><br>' +
'<a href="../newpat123/newpat123.htm" id="pat123" onclick="JavaScript:showIt( dd );" >123 Pedestrian Density</a><br>' +
'<a href="../newpat124/newpat124.htm" id="pat124" onclick="JavaScript:showIt( dd );" >124 Activity Pockets</a><br>' +
'<a href="../newpat125/newpat125.htm" id="pat125" onclick="JavaScript:showIt( dd );" >125 Stair Seats</a><br>' +
'<a href="../newpat126/newpat126.htm" id="pat126" onclick="JavaScript:showIt( dd );" >126 Something Roughly in the Middle</a><br>' +
'<a href="../newpat127/newpat127.htm" id="pat127" onclick="JavaScript:showIt( dd );" >127 Intimacy Gradient</a><br>' +
'<a href="../newpat128/newpat128.htm" id="pat128" onclick="JavaScript:showIt( dd );" >128 Indoor Sunlight</a><br>' +
'<a href="../newpat129/newpat129.htm" id="pat129" onclick="JavaScript:showIt( dd );" >129 Common Areas at the Heart</a><br>' +
'<a href="../newpat130/newpat130.htm" id="pat130" onclick="JavaScript:showIt( dd );" >130 Entrance Room</a><br>' +
'<a href="../newpat131/newpat131.htm" id="pat131" onclick="JavaScript:showIt( dd );" >131 the Flow Through Rooms</a><br>' +
'<a href="../newpat132/newpat132.htm" id="pat132" onclick="JavaScript:showIt( dd );" >132 Short Passages</a><br>' +
'<a href="../newpat133/newpat133.htm" id="pat133" onclick="JavaScript:showIt( dd );" >133 Staircase as a Stage</a><br>' +
'<a href="../newpat134/newpat134.htm" id="pat134" onclick="JavaScript:showIt( dd );" >134 Zen View</a><br>' +
'<a href="../newpat135/newpat135.htm" id="pat135" onclick="JavaScript:showIt( dd );" >135 Tapestry of Light and Dark</a><br>' +
'<a href="../newpat136/newpat136.htm" id="pat136" onclick="JavaScript:showIt( dd );" >136 Couple&apos;s Realm</a><br>' +
'<a href="../newpat137/newpat137.htm" id="pat137" onclick="JavaScript:showIt( dd );" >137 Children&apos;s Realm</a><br>' +
'<a href="../newpat138/newpat138.htm" id="pat138" onclick="JavaScript:showIt( dd );" >138 Sleeping to the East</a><br>' +
'<a href="../newpat139/newpat139.htm" id="pat139" onclick="JavaScript:showIt( dd );" >139 Farmhouse Kitchen</a><br>' +
'<a href="../newpat140/newpat140.htm" id="pat140" onclick="JavaScript:showIt( dd );" >140 Private Terrace on the Street</a><br>' +
'<a href="../newpat141/newpat141.htm" id="pat141" onclick="JavaScript:showIt( dd );" >141 A Room of One&apos;s Own</a><br>' +
'<a href="../newpat142/newpat142.htm" id="pat142" onclick="JavaScript:showIt( dd );" >142 Sequence of Sitting Spaces</a><br>' +
'<a href="../newpat143/newpat143.htm" id="pat143" onclick="JavaScript:showIt( dd );" >143 Bed Cluster</a><br>' +
'<a href="../newpat144/newpat144.htm" id="pat144" onclick="JavaScript:showIt( dd );" >144 Bathing Room</a><br>' +
'<a href="../newpat145/newpat145.htm" id="pat145" onclick="JavaScript:showIt( dd );" >145 Bulk Storage</a><br>' +
'<a href="../newpat146/newpat146.htm" id="pat146" onclick="JavaScript:showIt( dd );" >146 Flexible office Space</a><br>' +
'<a href="../newpat147/newpat147.htm" id="pat147" onclick="JavaScript:showIt( dd );" >147 Communal Eating</a><br>' +
'<a href="../newpat148/newpat148.htm" id="pat148" onclick="JavaScript:showIt( dd );" >148 Small Work Groups</a><br>' +
'<a href="../newpat149/newpat149.htm" id="pat149" onclick="JavaScript:showIt( dd );" >149 Reception Welcomes You</a><br>' +
'<a href="../newpat150/newpat150.htm" id="pat150" onclick="JavaScript:showIt( dd );" >150 A Place to Wait</a><br>' +
'<a href="../newpat151/newpat151.htm" id="pat151" onclick="JavaScript:showIt( dd );" >151 Small Meeting Rooms</a><br>' +
'<a href="../newpat152/newpat152.htm" id="pat152" onclick="JavaScript:showIt( dd );" >152 Half-private office</a><br>' +
'<a href="../newpat153/newpat153.htm" id="pat153" onclick="JavaScript:showIt( dd );" >153 Rooms to Rent</a><br>' +
'<a href="../newpat154/newpat154.htm" id="pat154" onclick="JavaScript:showIt( dd );" >154 Teenager&apos;s Cottage</a><br>' +
'<a href="../newpat155/newpat155.htm" id="pat155" onclick="JavaScript:showIt( dd );" >155 Old Age Cottage</a><br>' +
'<a href="../newpat156/newpat156.htm" id="pat156" onclick="JavaScript:showIt( dd );" >156 Settled Work</a><br>' +
'<a href="../newpat157/newpat157.htm" id="pat157" onclick="JavaScript:showIt( dd );" >157 Home Workshop</a><br>' +
'<a href="../newpat158/newpat158.htm" id="pat158" onclick="JavaScript:showIt( dd );" >158 Open Stairs</a><br>' +
'<a href="../newpat159/newpat159.htm" id="pat159" onclick="JavaScript:showIt( dd );" >159 Light on Two Sides of Every Room</a><br>' +
'<a href="../newpat160/newpat160.htm" id="pat160" onclick="JavaScript:showIt( dd );" >160 Building Edge</a><br>' +
'<a href="../newpat161/newpat161.htm" id="pat161" onclick="JavaScript:showIt( dd );" >161 Sunny Place</a><br>' +
'<a href="../newpat162/newpat162.htm" id="pat162" onclick="JavaScript:showIt( dd );" >162 North Face</a><br>' +
'<a href="../newpat163/newpat163.htm" id="pat163" onclick="JavaScript:showIt( dd );" >163 Outdoor Room</a><br>' +
'<a href="../newpat164/newpat164.htm" id="pat164" onclick="JavaScript:showIt( dd );" >164 Street Windows</a><br>' +
'<a href="../newpat165/newpat165.htm" id="pat165" onclick="JavaScript:showIt( dd );" >165 Opening to the Street</a><br>' +
'<a href="../newpat166/newpat166.htm" id="pat166" onclick="JavaScript:showIt( dd );" >166 Gallery Surround</a><br>' +
'<a href="../newpat167/newpat167.htm" id="pat167" onclick="JavaScript:showIt( dd );" >167 Six-foot Balcony</a><br>' +
'<a href="../newpat168/newpat168.htm" id="pat168" onclick="JavaScript:showIt( dd );" >168 Connection to the Earth</a><br>' +
'<a href="../newpat169/newpat169.htm" id="pat169" onclick="JavaScript:showIt( dd );" >169 Terraced Slope</a><br>' +
'<a href="../newpat170/newpat170.htm" id="pat170" onclick="JavaScript:showIt( dd );" >170 Fruit Trees</a><br>' +
'<a href="../newpat171/newpat171.htm" id="pat171" onclick="JavaScript:showIt( dd );" >171 Tree Places</a><br>' +
'<a href="../newpat172/newpat172.htm" id="pat172" onclick="JavaScript:showIt( dd );" >172 Garden Growing Wild</a><br>' +
'<a href="../newpat173/newpat173.htm" id="pat173" onclick="JavaScript:showIt( dd );" >173 Garden Wall</a><br>' +
'<a href="../newpat174/newpat174.htm" id="pat174" onclick="JavaScript:showIt( dd );" >174 Trellised Walk</a><br>' +
'<a href="../newpat175/newpat175.htm" id="pat175" onclick="JavaScript:showIt( dd );" >175 Greenhouse</a><br>' +
'<a href="../newpat176/newpat176.htm" id="pat176" onclick="JavaScript:showIt( dd );" >176 Garden Seat</a><br>' +
'<a href="../newpat177/newpat177.htm" id="pat177" onclick="JavaScript:showIt( dd );" >177 Vegetable Garden</a><br>' +
'<a href="../newpat178/newpat178.htm" id="pat178" onclick="JavaScript:showIt( dd );" >178 Compost</a><br>' +
'<a href="../newpat179/newpat179.htm" id="pat179" onclick="JavaScript:showIt( dd );" >179 Alcoves</a><br>' +
'<a href="../newpat180/newpat180.htm" id="pat180" onclick="JavaScript:showIt( dd );" >180 Window Place</a><br>' +
'<a href="../newpat181/newpat181.htm" id="pat181" onclick="JavaScript:showIt( dd );" >181 The Fire</a><br>' +
'<a href="../newpat182/newpat182.htm" id="pat182" onclick="JavaScript:showIt( dd );" >182 Eating Atmosphere</a><br>' +
'<a href="../newpat183/newpat183.htm" id="pat183" onclick="JavaScript:showIt( dd );" >183 Workspace Enclosure</a><br>' +
'<a href="../newpat184/newpat184.htm" id="pat184" onclick="JavaScript:showIt( dd );" >184 Cooking Layout</a><br>' +
'<a href="../newpat185/newpat185.htm" id="pat185" onclick="JavaScript:showIt( dd );" >185 Sitting Circle</a><br>' +
'<a href="../newpat186/newpat186.htm" id="pat186" onclick="JavaScript:showIt( dd );" >186 Communal Sleeping</a><br>' +
'<a href="../newpat187/newpat187.htm" id="pat187" onclick="JavaScript:showIt( dd );" >187 Marriage Bed</a><br>' +
'<a href="../newpat188/newpat188.htm" id="pat188" onclick="JavaScript:showIt( dd );" >188 Bed Alcove</a><br>' +
'<a href="../newpat189/newpat189.htm" id="pat189" onclick="JavaScript:showIt( dd );" >189 Dressing Room</a><br>' +
'<a href="../newpat190/newpat190.htm" id="pat190" onclick="JavaScript:showIt( dd );" >190 Ceiling Height Variety</a><br>' +
'<a href="../newpat191/newpat191.htm" id="pat191" onclick="JavaScript:showIt( dd );" >191 The Shape of Indoor Space</a><br>' +
'<a href="../newpat192/newpat192.htm" id="pat192" onclick="JavaScript:showIt( dd );" >192 Windows Overlooking Life</a><br>' +
'<a href="../newpat193/newpat193.htm" id="pat193" onclick="JavaScript:showIt( dd );" >193 Half-open Wall</a><br>' +
'<a href="../newpat194/newpat194.htm" id="pat194" onclick="JavaScript:showIt( dd );" >194 Interior Windows</a><br>' +
'<a href="../newpat195/newpat195.htm" id="pat195" onclick="JavaScript:showIt( dd );" >195 Staircase Volume</a><br>' +
'<a href="../newpat196/newpat196.htm" id="pat196" onclick="JavaScript:showIt( dd );" >196 Corner Doors</a><br>' +
'<a href="../newpat197/newpat197.htm" id="pat197" onclick="JavaScript:showIt( dd );" >197 Thick Walls</a><br>' +
'<a href="../newpat198/newpat198.htm" id="pat198" onclick="JavaScript:showIt( dd );" >198 Closets Between Rooms</a><br>' +
'<a href="../newpat199/newpat199.htm" id="pat199" onclick="JavaScript:showIt( dd );" >199 Sunny Counter</a><br>' +
'<a href="../newpat200/newpat200.htm" id="pat200" onclick="JavaScript:showIt( dd );" >200 Open Shelves</a><br>' +
'<a href="../newpat201/newpat201.htm" id="pat201" onclick="JavaScript:showIt( dd );" >201 Waist-high Shelf</a><br>' +
'<a href="../newpat202/newpat202.htm" id="pat202" onclick="JavaScript:showIt( dd );" >202 Built-in Seats</a><br>' +
'<a href="../newpat203/newpat203.htm" id="pat203" onclick="JavaScript:showIt( dd );" >203 Child Caves</a><br>' +
'<a href="../newpat204/newpat204.htm" id="pat204" onclick="JavaScript:showIt( dd );" >204 Secret Place</a><br>' +
'<br>Construction<br>' +
'<a href="../newpat205/newpat205.htm" id="pat205" onclick="JavaScript:showIt( dd );" >205 Structure Follows Social Spaces</a><br>' +
'<a href="../newpat206/newpat206.htm" id="pat206" onclick="JavaScript:showIt( dd );" >206 Efficient Structure</a><br>' +
'<a href="../newpat207/newpat207.htm" id="pat207" onclick="JavaScript:showIt( dd );" >207 Good Materials</a><br>' +
'<a href="../newpat208/newpat208.htm" id="pat208" onclick="JavaScript:showIt( dd );" >208 Gradual Stiffening</a><br>' +
'<a href="../newpat209/newpat209.htm" id="pat209" onclick="JavaScript:showIt( dd );" >209 Roof Layout</a><br>' +
'<a href="../newpat210/newpat210.htm" id="pat210" onclick="JavaScript:showIt( dd );" >210 Floor and Ceiling Layout</a><br>' +
'<a href="../newpat211/newpat211.htm" id="pat211" onclick="JavaScript:showIt( dd );" >211 Thickening the Outer Walls</a><br>' +
'<a href="../newpat212/newpat212.htm" id="pat212" onclick="JavaScript:showIt( dd );" >212 Columns at the Corners</a><br>' +
'<a href="../newpat213/newpat213.htm" id="pat213" onclick="JavaScript:showIt( dd );" >213 Final Column Distribution</a><br>' +
'<a href="../newpat214/newpat214.htm" id="pat214" onclick="JavaScript:showIt( dd );" >214 Root Foundations</a><br>' +
'<a href="../newpat215/newpat215.htm" id="pat215" onclick="JavaScript:showIt( dd );" >215 Ground Floor Slab</a><br>' +
'<a href="../newpat216/newpat216.htm" id="pat216" onclick="JavaScript:showIt( dd );" >216 Box Columns</a><br>' +
'<a href="../newpat217/newpat217.htm" id="pat217" onclick="JavaScript:showIt( dd );" >217 Perimeter Beams</a><br>' +
'<a href="../newpat218/newpat218.htm" id="pat218" onclick="JavaScript:showIt( dd );" >218 Wall Membrane</a><br>' +
'<a href="../newpat219/newpat219.htm" id="pat219" onclick="JavaScript:showIt( dd );" >219 Floor-ceiling Vaults</a><br>' +
'<a href="../newpat220/newpat220.htm" id="pat220" onclick="JavaScript:showIt( dd );" >220 Roof Vaults</a><br>' +
'<a href="../newpat221/newpat221.htm" id="pat221" onclick="JavaScript:showIt( dd );" >221 Natural Doors and Windows</a><br>' +
'<a href="../newpat222/newpat222.htm" id="pat222" onclick="JavaScript:showIt( dd );" >222 Low Sill</a><br>' +
'<a href="../newpat223/newpat223.htm" id="pat223" onclick="JavaScript:showIt( dd );" >223 Deep Reveals</a><br>' +
'<a href="../newpat224/newpat224.htm" id="pat224" onclick="JavaScript:showIt( dd );" >224 Low Doorway</a><br>' +
'<a href="../newpat225/newpat225.htm" id="pat225" onclick="JavaScript:showIt( dd );" >225 Frames as Thickened Edges</a><br>' +
'<a href="../newpat226/newpat226.htm" id="pat226" onclick="JavaScript:showIt( dd );" >226 Column Place</a><br>' +
'<a href="../newpat227/newpat227.htm" id="pat227" onclick="JavaScript:showIt( dd );" >227 Column Connections</a><br>' +
'<a href="../newpat228/newpat228.htm" id="pat228" onclick="JavaScript:showIt( dd );" >228 Stair Vault</a><br>' +
'<a href="../newpat229/newpat229.htm" id="pat229" onclick="JavaScript:showIt( dd );" >229 Duct Space</a><br>' +
'<a href="../newpat230/newpat230.htm" id="pat230" onclick="JavaScript:showIt( dd );" >230 Radiant Heat</a><br>' +
'<a href="../newpat231/newpat231.htm" id="pat231" onclick="JavaScript:showIt( dd );" >231 Dormer Windows</a><br>' +
'<a href="../newpat232/newpat232.htm" id="pat232" onclick="JavaScript:showIt( dd );" >232 Roof Caps</a><br>' +
'<a href="../newpat233/newpat233.htm" id="pat233" onclick="JavaScript:showIt( dd );" >233 Floor Surface</a><br>' +
'<a href="../newpat234/newpat234.htm" id="pat234" onclick="JavaScript:showIt( dd );" >234 Lapped Outside Walls</a><br>' +
'<a href="../newpat235/newpat235.htm" id="pat235" onclick="JavaScript:showIt( dd );" >235 Soft Inside Walls</a><br>' +
'<a href="../newpat236/newpat236.htm" id="pat236" onclick="JavaScript:showIt( dd );" >236 Windows which Open Wide</a><br>' +
'<a href="../newpat237/newpat237.htm" id="pat237" onclick="JavaScript:showIt( dd );" >237 Solid Doors with Glass</a><br>' +
'<a href="../newpat238/newpat238.htm" id="pat238" onclick="JavaScript:showIt( dd );" >238 Filtered Light</a><br>' +
'<a href="../newpat239/newpat239.htm" id="pat239" onclick="JavaScript:showIt( dd );" >239 Small Panes</a><br>' +
'<a href="../newpat240/newpat240.htm" id="pat240" onclick="JavaScript:showIt( dd );" >240 Half-inch Trim</a><br>' +
'<a href="../newpat241/newpat241.htm" id="pat241" onclick="JavaScript:showIt( dd );" >241 Seat Spots</a><br>' +
'<a href="../newpat242/newpat242.htm" id="pat242" onclick="JavaScript:showIt( dd );" >242 Front Door Bench</a><br>' +
'<a href="../newpat243/newpat243.htm" id="pat243" onclick="JavaScript:showIt( dd );" >243 Sitting Wall</a><br>' +
'<a href="../newpat244/newpat244.htm" id="pat244" onclick="JavaScript:showIt( dd );" >244 Canvas Roofs</a><br>' +
'<a href="../newpat245/newpat245.htm" id="pat245" onclick="JavaScript:showIt( dd );" >245 Raised Flowers</a><br>' +
'<a href="../newpat246/newpat246.htm" id="pat246" onclick="JavaScript:showIt( dd );" >246 Climbing Plants</a><br>' +
'<a href="../newpat247/newpat247.htm" id="pat247" onclick="JavaScript:showIt( dd );" >247 Paving with Cracks Between the Stones</a><br>' +
'<a href="../newpat248/newpat248.htm" id="pat248" onclick="JavaScript:showIt( dd );" >248 Soft Tile and Brick</a><br>' +
'<a href="../newpat249/newpat249.htm" id="pat249" onclick="JavaScript:showIt( dd );" >249 Ornament</a><br>' +
'<a href="../newpat250/newpat250.htm" id="pat250" onclick="JavaScript:showIt( dd );" >250 Warm Colors</a><br>' +
'<a href="../newpat251/newpat251.htm" id="pat251" onclick="JavaScript:showIt( dd );" >251 Different Chairs</a><br>' +
'<a href="../newpat252/newpat252.htm" id="pat252" onclick="JavaScript:showIt( dd );" >252 Pools of Light</a><br>' +
'<a href="../newpat253/newpat253.htm" id="pat253" onclick="JavaScript:showIt( dd );" >253 Things from Your Life</a><br>' +
' '; 
document.body.style.backgroundColor = '#ccc';
document.body.style.font = '12pt monospace'; 
document.body.style.overflow = 'hidden'; 

var sheet = document.createElement('style'); 
document.body.appendChild(sheet); 
sheet.innerHTML = "h1 {display: inline;} #content {border: 2px inset; height: 90%; left: 23%; overflow: auto; padding: 0 0.5% 0.5% 120px; position: absolute; text-indent: -110px; top: 5%; width: 65%} "; 

var container = document.createElement( "div" ); 
document.body.appendChild( container ); 
container.style.left = "1%"; 
container.style.position = "absolute"; 
container.style.top = "5px"; 
container.style.width = "100%"; 
container.innerHTML = "<h1>New Patterns </h1>a preliminary mockup / 'wireframe' / work in progress <a href='JavaScript:showIt(254)'>show it</a>" 

var menu = document.createElement( "div" ); 
document.body.appendChild( menu ); 
menu.style.border = "2px inset"; 
menu.style.height = "90%"; 
menu.style.left = "1%"; 
menu.style.padding = "0.5%"; 
menu.style.overflow = "auto"; 
menu.style.overflowX = "hidden"; 
menu.style.position = "absolute"; 
menu.style.top = "5%"; 
menu.style.width = "20%"; 
menu.innerHTML= menuSourceString; 

