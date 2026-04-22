package day06.ch11.payment_exception;

public abstract class Payment implements Payable{
	
	protected String shopName;
	protected String productName;
	protected long productPrice;
	
	public Payment(String shopName, String productName, long proudctPrice){
		this.shopName = shopName;
		this.productName = productName;
		this.productPrice = proudctPrice;
	}

}
