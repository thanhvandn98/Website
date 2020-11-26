#Single comment
=begin
    how to use Multi comment
    puts "New" #print in new line
    puts "   /|"
    puts "  / |"
puts " /  |"
puts "/___|"
print "ruby" #print in same line
puts "Acadamy \" Ace"
puts "Strange Uppcase"


phrase = "           Strip"
puts phrase.downcase()
puts phrase.upcase()
puts phrase.strip()
puts "Enter information: "
name = gets.chomp() #not get new line   
puts ("EE " + name + " really")

Ruby automatically convert eveything entering to string 
=end
# puts "Enter a number: "
# num1 = gets.chomp().to_f #get risk of adding new line
# puts "Enter a next number: "
# num2 = gets.chomp().to_f
# puts (num1 + num2)
planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter",
    "Saturn", "Uranus", "Neptune"]
 
planets.each do |iter| 
    puts iter
end
while true
 
    r = 1 + rand(30)
    print "#{r} "
 
    if r == 22
        break
    end
end
digits = Array(0..9)
num = digits.at(1)
puts "#{num}"
words = %w[first second third fourth fifth sixth]
str = ""
words.reverse_each {|word| str += "#{word} "}
p str
arr = [1, 2, 3, 4, 5, 6]
arr.map {|a| p 2*a}     #=> [2, 4, 6, 8, 10]

p arr                   #=> [1, 2, 3, 4, 5]
arr.map! {|a| a**4}   #=> [1, 4, 9, 16, 25]
p arr                   #=> [1, 4, 9, 16, 25]


first_array = ["Matz", "Guido"]
p second_array = Array.new(first_array)
p first_array.equal? second_array
a1 = Array.new
a2 = Array.new 3
a3 = Array.new 6, "coin"
a4 = Array.new [11]
puts [a1, a2, a3, a4].inspect
arr = [1, 2, 3, [2, 4, 6, [11, 12]]]
 
puts arr.length
puts arr[0], arr[1]
 
puts arr[3][0]
puts arr[3][1]
 
puts arr[3][3][0]
puts arr[3][3][1]
 
p arr.flatten
arr1 = [1, 2, 3, 4, 5]
arr2 = [6, 7, 8, 9, 10]
 
p arr1 + arr2
p arr1.concat arr2

alpha = %w{ a b c d e f}
 
puts alpha.inspect
puts "Array size: #{alpha.length}"
puts "First element: #{alpha.first}"
puts "Last element: #{alpha.last}"
 
puts alpha.eql? alpha.dup
puts alpha.eql? alpha.dup.delete_at(0)
 
alpha.clear
puts alpha.inspect
puts alpha.empty?

arr = [1, 2, 2, 2, 3, 4, 5, 8, 11]
 
puts arr.index 2
puts arr.index 11
puts arr.rindex 2
 
puts arr.include? 3
puts arr.include? 10
 
puts arr.join '-'
p arr.uniq
A = [1, 2, 3, 4, 5]
B = [4, 5, 6, 7, 8]
 
union = A | B
isect = A & B
diff1  = A - B
diff2  = B - A
sdiff = (A - B) | (B - A)
 
puts "Union: #{union}"
puts "Intersection: #{isect}"
puts "Difference of A - B: #{diff1}"
puts "Difference of B - A: #{diff2}"   
puts "Symmetric: #{sdiff}"

hash = { 1 => "Germany", 
    2 => "Norway", 
    3 => "United Kingdom", 
    4 => "United States"
 }
 
hash.each { |k, v| puts "Key: #{k}, Value: #{v}" }
hash.each_key { |key| puts "#{key}" }
hash.each_value { |val| puts "#{val}" }
hash.each_pair { |k, v| puts "Key: #{k}, Value: #{v}" }
include Math
puts PI