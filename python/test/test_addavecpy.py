import pytest
from sum import add, addbank,sub,mul,div

def test_add():
    assert add(1, 2) == 3

def test_addbank():
    with pytest.raises(ValueError):
        addbank(5, 3)
def test_sub():
    assert sub(5, 3) == 2

def test_mul():
    assert mul(5, 3) == 15

def test_div():
    with pytest.raises(ValueError):
        div(5, 1)