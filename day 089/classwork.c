
#include <stdio.h>

 int main(void)
{
     
   fprintf(stdout, "\nhello, world\n\n");
    
    printf("\nhello, world\n\n");
    
    
    int r = 0;
    if((r = printf("\nhello, world\n")) < 0)    
     perror("printf error");    
     
    else    
        fprintf(stdout, "amount of symbols %d\n\n", r);
                
    
    
    return 0;
}