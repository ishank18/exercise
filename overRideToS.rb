class String
	def to_s
		i = 0
		while(i < self.length)
			ascii_code = self[i].ord
			if (ascii_code >= 65 && ascii_code <= 90) || (ascii_code >= 97 && ascii_code <= 122)
				if ascii_code <97
					ascii_code = ascii_code + 32
					print ascii_code.chr
				else
					ascii_code = ascii_code - 32
					print ascii_code.chr
				end
			else
				print self[i]
			end
			i = i+1
		end
	end
end
puts "hello WORLD".to_s

