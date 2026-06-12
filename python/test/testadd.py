import unittest
from sum import add, addbank

class TestAdd(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(1,2),3)
    def test_addbank(self):
        self.assertRaises(ValueError, addbank, 5, 3)

if __name__ == '__main__':
    unittest.main()