class romanNum(object):
	"""docstring for romanNum"""
	def __init__(self):
		super(romanNum, self).__init__()

	def RomanToDec(RomanNumber):
		romanDecDic = {'I':1, 'V':5}
		decResult = 0
		for rD in RomanNumber:
			decResult = decResult + romanDecDic[rD]
		return decResult

	def DecToRoman (decNumber):
		romanResult = ''
		if not (type(decNumber) is int):
			return 'ERROR'
		if(decNumber < 1 or decNumber > 3999):
			return 'ERROR'
		while(decNumber > 0):
			if(decNumber < 4):
				romanResult = romanResult + 'I'
				decNumber = decNumber - 1
				continue
			if(decNumber == 4):
				romanResult = 'IV'
				decNumber = decNumber - 4
				continue
			if(decNumber > 4 and decNumber < 9):
				romanResult = romanResult + 'V'
				decNumber = decNumber - 5
				continue
			if(decNumber == 9):
				romanResult = romanResult + 'IX'
				decNumber = decNumber - 9
				continue
			if(decNumber > 9 and decNumber < 40):
				romanResult = romanResult + 'X'
				decNumber = decNumber - 10
				continue
			if(decNumber > 39 and decNumber <50):
				romanResult = romanResult + 'XL'
				decNumber = decNumber - 40
				continue
			if(decNumber > 49 and decNumber < 90):
				romanResult = romanResult + 'L'
				decNumber = decNumber - 50
				continue
			if(decNumber > 89 and decNumber < 100):
				romanResult = romanResult + 'XC'
				decNumber = decNumber - 90
				continue
			if(decNumber > 99 and decNumber < 400):
				romanResult = romanResult + 'C'
				decNumber = decNumber - 100
				continue
			if(decNumber > 399 and decNumber < 500):
				romanResult = romanResult + 'CD'
				decNumber = decNumber - 400
				continue
			if(decNumber > 499 and decNumber < 900):
				romanResult = romanResult + 'D'
				decNumber = decNumber - 500
				continue
			if(decNumber > 899 and decNumber < 1000):
				romanResult = romanResult + 'CM'
				decNumber = decNumber - 900
				continue
			if(decNumber > 999 and decNumber < 4000):
				romanResult = romanResult + 'M'
				decNumber = decNumber - 1000				
		return romanResult