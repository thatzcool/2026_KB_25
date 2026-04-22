package day06.ch11.sec02.exam01;

public class ExceptionHandlingExample2 {
    public static void printLength(String data) {
        int result = 0;
        try {
            result = data.length();  //data가 null일경우 NullPointerException 발생 가능
            System.out.println("문자수: " + result);
        } catch (NullPointerException e) {
            System.out.println(e.getMessage());  //1
            System.out.println(e.toString());    //2
            e.printStackTrace();                 //3
        } finally {
            System.out.println("[마무리 실행]");
        }


    }

    public static void main(String[] args) {
        System.out.println("[프로그램 시작]\n");
        printLength("ThisIsJava");
        printLength(null);  //매개변수로 null 대입 , NullPoint Exception 발생
        System.out.println("[프로그램 종료]");
    }
}


