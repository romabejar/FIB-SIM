#include "CongruentailRandom.h"
#include <stdlib.h>
#include <stdio.h> 
#include <math.h>


long double m_seed = 48271;
//m_seed = 312479559;
//increment x2
long double m_increment = 0;
//multiplier x3;
long double m_multiplier = 16807;
long double m_last_random = 0;
int digits = 5;

double round_dbl(double number)
{
	double d_rtn, i_div, i_mlt;
	int half = 5;
	int aux = 0;
	if(number<0) half = -5;
	i_div = half/pow(10,digits+1);
	i_mlt = pow(10, digits);
	aux = (number + i_div)*(i_mlt);
	d_rtn = aux/(i_mlt);
	return d_rtn;
}

long double get_random(){
	long double a;
	long double pow231 = pow((long double)2,(long double)31)-1;

	//definition of a output file in a Windows distribution and 
	//initialization
	a = (m_multiplier*m_seed + m_increment);
	m_seed = fmod(a,pow231);
	m_last_random = (m_seed / pow231);
	return m_last_random;

}

double exponential( double a, double b )
{
	//assert( b > 0. );
	return round_dbl(a - b * log( uniform( 0., 1. ) ));
}

double uniform( double xMin, double xMax )
{
	//assert( xMin < xMax );
	return round_dbl(xMin + ( xMax - xMin ) * get_random());
}

double intuniform( double xMin, double xMax )
{
	//assert( xMin < xMax );
	int result = (int) round_dbl(xMin + ( xMax - xMin ) * get_random());
	return result;
}

double lognormal( double a, double mu, double sigma ) // Lognormal
{
	return round_dbl(a + exp( normal( mu, sigma ,0) ));
}

double normal( double mu, double sigma , int truncated) // Normal
{
	//assert( sigma > 0. );
	static int f = 1;
	static double p, p1, p2;
	double q, result;
	if ( f==1 ) {
		do {
			p1 = uniform( -1., 1. );
			p2 = uniform( -1., 1. );
			p = p1 * p1 + p2 * p2;
		} while ( p >= 1. );
		q = p1;
	}
	else
		q = p2;
	if(f==1) f=0; else f=1; //f = !f;
	result = mu + sigma * q * sqrt( -2. * log( p ) / p );
	if (result<0) { 
		if (truncated==1) return 0;
	}
	return round_dbl(result);
}

double kerlang(double k, double lambda){
	double z = 0.0;
	int i = 0;
	for (i = 0; i < k; i++)
			z += exponential(0,lambda);
	return round_dbl(z);
}

double hypoexponential(double k, double lambda[]){

	double z = 0.0;
	int i = 0;
	//lambda es un array i k marca l'allargada
	for (i = 0; i < k; i++)
			z += exponential(0,lambda[i]);
	//aixo hauria de ser lambda[i]
	return round_dbl(z);

}

double hiperexponential(double probs[],double lambda[]){

	double prob = get_random();
	int i = 0;
	//mires on cau del vector de probabilitats i selecciones la lambda tonces retornes l'exponencial d'aquella lambda
	//probabilitats i lambda son arrays cada cop mires un valor aleatori entre 0 i 1
	for (i=0;i<sizeof(probs);i++){
		if (prob<=probs[i]) return round_dbl(exponential(0,lambda[i]));
	}
	return 0;

}


