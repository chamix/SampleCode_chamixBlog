class romanNum(object):
	"""docstring for romanNum"""
	def __init__(self):
		super(romanNum, self).__init__()

	def DecToRoman (decNumber):
		romanResult = ''
		while(decNumber > 0):
			if(decNumber < 4):
				romanResult = romanResult + 'I'
				decNumber = decNumber - 1
			if(decNumber == 4):
				romanResult = 'IV'
				decNumber = decNumber - 4
			if(decNumber > 4 and decNumber < 9):
				romanResult = romanResult + 'V'
				decNumber = decNumber - 5
			if(decNumber == 9):
				romanResult = romanResult + 'IX'
				decNumber = decNumber - 9
			if(decNumber > 9 and decNumber < 40):
				romanResult = romanResult + 'X'
				decNumber = decNumber - 10
			if(decNumber > 39 and decNumber <50):
				romanResult = romanResult + 'XL'
				decNumber = decNumber - 40
			if(decNumber > 49 and decNumber < 90):
				romanResult = romanResult + 'L'
				decNumber = decNumber - 50
			if(decNumber > 89 and decNumber < 100):
				romanResult = romanResult + 'XC'
				decNumber = decNumber - 90
			if(decNumber > 99 and decNumber < 400):
				romanResult = romanResult + 'C'
				decNumber = decNumber - 100
		return romanResult