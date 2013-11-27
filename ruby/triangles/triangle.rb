class Triangle

  def initialize(a, b, c)
    @a = a
    @b = b
    @c = c
    validate
  end

  def validate
    if a == 0 || c <= 0
      raise TriangleError
    end
  end

  class TriangleError < ArgumentError

  end

  def kind
    if (@a == @b) && (@b == @c) && (@c == @a)
      :equilateral
    elsif (@a == @b) || (@b == @c) || (@c == @a)
      :isosceles
    else
      :scalene
    end
  end
end
