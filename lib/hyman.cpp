#include<iostream>
#include<thread>

using namespace std;

bool s1=false;
bool s2=false;
int turno=1;


void proceso_1(){
    while(10){

    
     s1=true;

     while(turno!=1){

         while(s2==true){

         }
         turno=1;
     }

     cout<<"p1-sc"<<endl;
     s1=false;
    }

}

void proceso_2(){
    while(10){
     s2=true;

     while(turno!=2){

         while(s1==true){

         }
         turno=2;
     }

     cout<<"p2-sc"<<endl;
     s2=false;
    }


}



int main(){

    thread p1(proceso_1);
    thread p2(proceso_2);

    p1.join();
    p2.join();
}