class Bst
  attr_reader :data, :left, :right

  def initialize(input)
    @data = input
  end

  def insert(new_data)
    if new_data <= data
      insert_left(new_data)
    else
      insert_right(new_data)
    end
  end

  def insert_left(new_data)
    if left
      left.insert(new_data)
    else
      @left = Bst.new(new_data)
    end
  end

  def insert_right(new_data)
    if right
      right.insert(new_data)
    else
      @right = Bst.new(new_data)
    end
  end

  def each(&block)
    result = [data]
    if left
      result << left.each(&block)
    end
    yield(*result)
  end
end
