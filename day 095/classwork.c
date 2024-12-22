#include <stdio.h>

int main()
{
    int c, nl;
    nl = 0;
    while ((c = getchar()) != EOF)
        if (c == '\n')
        ++nl;

    printf("Total lines: %d\n", nl);
}

//didnt really understand how this code works, gonna have to look over it one few more times