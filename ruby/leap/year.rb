class Year

  def initialize(year)
    @year = year
  end

  # if divisible by 4, then leap candidate
  # if leap candidate, divide by 100.
  # if evenly divisible by 100, then divide by 400
  # if evenly divisible by 400 then leap year true

  def leap?
    if @year % 4 == 0 && @year % 100 != 0
      true
    elsif
      @year % 4 == 0 && @year % 100 == 0 && @year % 400 == 0
      true
    else
      false
    end
  end
end
