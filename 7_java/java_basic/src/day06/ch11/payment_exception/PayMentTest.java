package day06.ch11.payment_exception;


public class PayMentTest {

	// main() : 수정하지 마세요.
	public static void main(String[] args) throws PayException {
		
		CardPayment card1 = new CardPayment("11번가","Java책",17000,"123-432-111","0070",0);
		payProcess( card1 );		
		System.out.println("-------------------------------------");		
		CashPayment cash1 = new CashPayment("인터파크","에어컨",2400000,"198-32");
		payProcess( cash1 );
		System.out.println("-------------------------------------");	
		

	}
	
	// payProcess() : 수정하지 마세요.
	public static void payProcess( Payment p ) throws PayException {
		p.pay();
		System.out.println( p );		
	}

}
