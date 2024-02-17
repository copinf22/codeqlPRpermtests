#include<stdio.h>


int main(int argc, char *argv[]){
    char buf[40];
    fgets(buf, 30, stdin);
    printf(buf);

    char buf2[40];
    fgets(buf2, 30, stdin);
    printf(buf2);
}