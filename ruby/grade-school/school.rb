class School
  attr_accessor :db

  def initialize
    @db = {}
  end

  def add(name, grade)
    @db[grade] = [name]
  end
end
