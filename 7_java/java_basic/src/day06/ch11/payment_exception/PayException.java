package day06.ch11.payment_exception;

import java.lang.Exception;
public class PayException extends Exception {
	
	public PayException(String message){
	    super(message);
	}
}
