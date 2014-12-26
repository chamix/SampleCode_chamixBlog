import unittest
from romanNum import romanNum

class Test_romanNum(unittest.TestCase):
	
	def test_romanNum_DecToRoman_should_return_I_when_1(self):
		roamanNumInstance = romanNum()
		result = romanNum.DecToRoman(1)
		self.assertEqual(result, 'I')

	def test_romanNum_DecToRoman_should_return_II_when_2(self):
		roamanNumInstance = romanNum()
		result = romanNum.DecToRoman(2)
		self.assertEqual(result, 'II')

	def test_romanNum_DecToRoman_should_return_III_when_3(self):
		roamanNumInstance = romanNum()
		result = romanNum.DecToRoman(3)
		self.assertEqual(result, 'III')

	def test_romanNum_DecToRoman_should_return_IV_when_4(self):
		roamanNumInstance = romanNum()
		result = romanNum.DecToRoman(4)
		self.assertEqual(result, 'IV')

	def test_romanNum_DecToRoman_should_return_V_when_5(self):
		roamanNumInstance = romanNum()
		result = romanNum.DecToRoman(5)
		self.assertEqual(result, 'V')

	def test_romanNum_DecToRoman_should_return_VIII_when_8(self):
		roamanNumInstance = romanNum()
		result = romanNum.DecToRoman(8)
		self.assertEqual(result, 'VIII')

	def test_romanNum_DecToRoman_should_return_IX_when_9(self):
		roamanNumInstance = romanNum()
		result = romanNum.DecToRoman(9)
		self.assertEqual(result, 'IX')

	def test_romanNum_DecToRoman_should_return_XXXVIII_when_38(self):
		roamanNumInstance = romanNum()
		result = romanNum.DecToRoman(38)
		self.assertEqual(result, 'XXXVIII')

	def test_romanNum_DecToRoman_should_return_XXXIX_when_39(self):
		roamanNumInstance = romanNum()
		result = romanNum.DecToRoman(39)
		self.assertEqual(result, 'XXXIX')

	def test_romanNum_DecToRoman_should_return_XLVIII_when_48(self):
		roamanNumInstance = romanNum()
		result = romanNum.DecToRoman(48)
		self.assertEqual(result, 'XLVIII')

	def test_romanNum_DecToRoman_should_return_XLIX_when_49(self):
		roamanNumInstance = romanNum()
		result = romanNum.DecToRoman(49)
		self.assertEqual(result, 'XLIX')

	def test_romanNum_DecToRoman_should_return_LIII_when_53(self):
		roamanNumInstance = romanNum()
		result = romanNum.DecToRoman(53)
		self.assertEqual(result, 'LIII')

	def test_romanNum_DecToRoman_should_return_LXXXVIII_when_88(self):
		roamanNumInstance = romanNum()
		result = romanNum.DecToRoman(88)
		self.assertEqual(result, 'LXXXVIII')

	def test_romanNum_DecToRoman_should_return_XCIX_when_99(self):
		roamanNumInstance = romanNum()
		result = romanNum.DecToRoman(99)
		self.assertEqual(result, 'XCIX')

	def test_romanNum_DecToRoman_should_return_CCXCIX_when_299(self):
		roamanNumInstance = romanNum()
		result = romanNum.DecToRoman(299)
		self.assertEqual(result, 'CCXCIX')

	def test_romanNum_DecToRoman_should_return_CCCXCIX_when_399(self):
		roamanNumInstance = romanNum()
		result = romanNum.DecToRoman(399)
		self.assertEqual(result, 'CCCXCIX')
	
if __name__ == '__main__':
	unittest.main()