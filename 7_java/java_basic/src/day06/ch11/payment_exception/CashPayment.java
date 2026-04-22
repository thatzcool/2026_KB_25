package day06.ch11.payment_exception;

public class CashPayment extends Payment{
	
	private String cashReceiptNumber;  //현금영수증비밀번호

	public CashPayment(String shopName, String productName, long proudctPrice,
			String cashReceiptNumber) {
		
		super(shopName, productName, proudctPrice);
		this.cashReceiptNumber = cashReceiptNumber;
	}
	
	public String getCashReceiptNumber() {
		return cashReceiptNumber;
	}

	public void setCashReceiptNumber(String cashReceiptNumber) {
		this.cashReceiptNumber = cashReceiptNumber;
	}

	public String toString(){
		return "[ 현금 결제 정보 ]\n"
				+ "상점명 : "+shopName+"\n상품명 : "+productName+"\n상품가격 : "+productPrice
				+ "\n현금영수증번호 : "+cashReceiptNumber;
	}

	public void pay() throws PayException {
		if(productPrice<=0)
			throw new PayException("가격이 잘못되었습니다");
		else
			System.out.println("현금이 정상적으로 지불되었습니다.");
	}

}
