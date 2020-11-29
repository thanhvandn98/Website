require 'open-uri'
require 'nokogiri'
require 'rubygems'
require 'uri'
require 'mechanize'
require 'pathname'
require 'spreadsheet'

# inspired by: http://stackoverflow.com/a/7933585/281699

class Downloader
  def make_absolute href, root
    URI.parse(root).merge(URI.parse(href)).to_s
  end

  def get_images_from_url url, destination='E:\PROGRAMPLUS\0.WEB\Ruby\images'
    begin 
      webpage = Nokogiri::HTML(open(url))
    rescue OpenURI::HTTPError => e
      if e.message == '404 Not Found'
        puts "Not Found"
        return
      else
        raise e, "#{e.message}"
      end
    rescue => e
      raise e, "#{e.message}"
    end

    webpage.xpath("//img/@src").each do |src|
      uri = make_absolute(src,url)
      final_destination = File.join(File.expand_path(destination), File.basename(uri))
      begin
        next if File.exists? final_destination
        puts "Getting: #{uri}"
        agent = Mechanize.new
        agent.get(uri).save final_destination
        
      rescue => e
        puts "The request for a page at #{uri} returned an error. #{e.message}"
        next
      end
    end
  end
end

URLs = [
      'https://wallhere.com/en/wallpapers?q=dog'
    ]

URLs.each do |url|
  Downloader.new.get_images_from_url url
end
# URI.open("https://wallhere.com/en/wallpapers?q=dog")
# #!/usr/bin/env ruby

# # usage: saveimages.rb <url>
# # locally save all images from a web site



# exit if ARGV[0].nil?

# doc = Nokogiri::HTML(open ARGV[0])

# images = doc.xpath('//img').to_a.reject! do |img|
#   url = img.attr('src')
#   # ignore images unless they're png, gif, or jpeg
#   # and ignore any images from quantserve
#   not url.match(/(png|gif|jpe?g)$/i) or url.match(/quantserve/)
# end

# images.each do |img|
#   url      = img.attr('src')
#   filename = File.basename(url)

#   open(filename, 'wb') do |file|
#     puts "writing #{url} to #{filename}"
#     file << open(url).read
#   end
# end
# Fetch and parse HTML document
# doc = Nokogiri::HTML(URI.open('https://wallhere.com/en/wallpapers?q=cat'))

# puts "### Search for nodes by css"
# doc.css('nav ul.menu li a', 'article h2').each do |link|
#     puts link.content
# end

# puts "### Search for nodes by xpath"
# doc.xpath('//nav//ul//li/a', '//article//h2').each do |link|
#     puts link.content
# end

# puts "### Or mix and match."
# doc.search('nav ul.menu li a', '//article//h2').each do |link|
#     puts link.content
# end
# doc = Nokogiri::HTML(URI.open("http://www.threescompany.com/"))
# URI.open("https://wallhere.com/en/wallpapers?q=") {|f|
#     f.each_line {|line| p line}
# }
# @doc = Nokogiri::XML(URI.open("https://wallhere.com/en/wallpapers?q=dog"))
# urls = [

# ]
# @doc.xpath("data-src")
# def download_image(url, dest)
#     open(url) do |u|
#     File.open(dest, 'wb') { |f| f.write(u.read) }
#     end
# end

# require 'net/http'
# require 'nokogiri'

# # This script parse and download image files from html documents
# def get_html(url)
#     uri = URI(url)
#     response = Net::HTTP.start(uri.host, uri.port,
#                             :use_ssl => uri.scheme == 'https') do |http|
#     resp = http.get(uri.path)
#     case resp
#     when Net::HTTPSuccess then
#         resp.body
#     when Net::HTTPRedirection then
#         warn "redirect to #{location}"
#         resp.body
#     else
#         resp.value
#     end
#     end
# end

# def parse_html(html)
#     html_doc = Nokogiri::HTML(html)
#     nodes = html_doc.xpath("//img[@src]")
#     raise "No <img .../> tags!" if nodes.empty?
#     nodes.inject([]) do |uris, node|
#     uris << node.attr('src').strip
#     end.uniq
# end

# def downloader(url, paths)
#     host_uri = URI(url)
#     Dir.mkdir('images')
#     Net::HTTP.start(host_uri.host, host_uri.port,
#                     :use_ssl => host_uri.scheme == 'https') { |http|
#     paths.each do |path|
#         puts "Downloading: " + path
#         begin
#         resp = http.get(path)
#         open(File.join('images', path.split('/')[-1]), "wb") do |file|
#             file.write(resp.body)
#         end
#         rescue                              
#         test_response(resp)
#         end
#         puts "--100%--"
#     end
#     }
# end

# def test_response(resp)
#     case resp
#     when Net::HTTPServerError
#     puts 'HTTPServerError'
#     when Net::HTTPClientError
#     puts 'HTTPClientError'
#     when Net::HTTPRedirection
#     puts 'HTTPRedirection'
#     when Net::HTTPSuccess
#     puts 'OK'
#     else
#     puts 'UNKNOWN'
#     end
# end

# ## process start here
# URL = 'https://wallhere.com/en/wallpapers?q=dog'
# html = get_html(URL)
# paths = parse_html(html)
# # download all imgs
# downloader(URL, paths)

