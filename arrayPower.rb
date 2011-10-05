class Array
	def power(x)
		temp = 1
		i=0
		while(i<self.length)
			j=0
			temp = self[i]
			while(j < x-1)
				self[i] = self[i] * temp
				j +=1;
			end
			i += 1
		end
		p self
	end
end
[1,2,3,4,5,6].power(3)

