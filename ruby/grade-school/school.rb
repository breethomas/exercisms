class School
  attr_accessor :db

  def initialize
    @db = Hash.new {|hash, key| hash[key] = [] }
  end

  def add(name, grade)
    @db[grade] << name
  end

  def grade(grade)
    @db[grade]
  end

 # def sort
 #   #
 #   @db.keys.sort
 # end
end

