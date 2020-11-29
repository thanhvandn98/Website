require 'open-uri'  
require 'nokogiri'
require 'writeexcel'
require 'thor'
module TomosiaWallhereCrawl
    class CrawlImage
        def savedata (data = {}, destination)
            workbook  = WriteExcel.new("InfoImage.xls")
            worksheet = workbook.add_worksheet
            data.each_with_index do |row, stt|
                row.each do |cat, value|
                    worksheet.write_string(stt, 0, row['name'])
                    worksheet.write_url(stt, 1  , row['url'])
                    worksheet.write_string(stt, 2, row['extension'])
                    worksheet.write_string(stt, 3, row['size'])
                    end
            end
            workbook.close
            puts "Save successfully"
        end

        def crawldata(key,destination,max=nil)	
            sum = 0
            index = 1
            images = []
            while sum != max do
            # Open url
                url = "https://wallhere.com/en/wallpapers?q=#{cat}&page=#{index}"
                content = open(url).read
                parsed_content = Nokogiri::HTML(content)			  
                length = parsed_content.css('.item').to_a.length - 1
                total_img = parsed_content.css('div.hub-totalinfo').text.split(' HD Wallpapers')[0].to_i
                if max == nil || max > total_img
                    max = total_img
                    puts "This tag has #{total_img} pictures"	
                end
                i = 0
                for i in i..length
                    urlimg = parsed_content.css('.item').to_a[i].children.children.first.to_h['src']
                    #Save url image in Images[]
                    images.push(urlimg)
                    
                    print '.'
                    sum += 1
                        if max == sum 
                            break
                        end
                end
                index += 1
            end
            download(images,destination)
        end

        def download(images,destination)
            data = []
            row = {}
            thread = []
            images.each do |img|	
                thread << Thread.new(img) do
                    timeout = 0
                    begin 
                        open(img) do |image|
                            nameimg = File.basename(img,".jpg!s")
                            ui = img
                            ex = File.extname(img).delete('.!s')
                            size = ""
                            File.open("#{destination}/#{nameimg}","wb") do |file|
                                file.write(image.read)
                                size = image.size
                            end
                            size = size.to_s + " bytes"
                            #Save data in hash row
                            row = {"name"=>nameimg, "url"=>ui, "extension"=> ex, "size" => size}
                            data.push(row)
                        end
                        rescue => exception
                        if timeout < 3
                            timeout += 1
                            retry
                        else
                            next
                        end
                    end	
                end
            end
            thread.each {|t| t.join}
            puts " "
            puts "Download successfully"
            savedata(data,destination)
        end
    end
end