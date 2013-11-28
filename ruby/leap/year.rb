class Year
  attr_reader :year

  def initialize(year)
    @year = year
  end

  def leap_candidate?
    year % 4 == 0
  end

  def simple_leap?
    leap_candidate? && year % 100 != 0
  end

  def leap?
    if simple_leap? 
      true
    elsif
      year % 4 == 0 && year % 100 == 0 && year % 400 == 0
      true
    else
      false
    end
  end
end
