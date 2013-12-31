class SecretHandshake
  attr_reader :negative, :data

  def initialize(input_marker)
    if input_marker.kind_of?(Fixnum)
      binary = input_marker.to_s(2).reverse
      @data = binary[0..3]
      @negative = (binary[4] == "1")
    else
      @data = ""
    end
  end

  def known_actions
    {
      "1"    => "wink",
      "10"   => "double blink",
      "100"  => "close your eyes",
      "1000" => "jump"
    }
  end

  def actions_for(data)
    results = []
    data.chars.each_with_index do |digit, index|
      if digit == "1"
        key = digit + ("0" * index)
        results << known_actions[key]
      end
    end
    results
  end

  def negative?
    negative
  end

  def commands
    if negative?
      actions_for(data).reverse
    else
      actions_for(data)
    end
  end
end

