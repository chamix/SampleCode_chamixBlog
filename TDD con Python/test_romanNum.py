import unittest
from romanNum import romanNum

class Test_romanNum(unittest.TestCase):
	
	def test_romanNum_DecToRoman_should_return_I_when_1(self):
		roamanNumInstance = romanNum()
		result = romanNum.DecToRoman(1)
		self.assertEqual(result, 'I')

if __name__ == '__main__':
	unittest.main()