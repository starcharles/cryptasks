#gcc_options = -std=c++11 -Wall --pedantic-errors
gcc_options = -std=c++17 -Wall --pedantic-errors

program : main.cpp all.h all.h.gch
	g++ $(gcc_options) -include all.h -o $@ $<

all.h.gch : all.h
	g++ $(gcc_options) -x c++-header -o $@ $<

# .PHONY targets
run : program
	./program

clean :
	rm -f ./program
	rm -f ./all.h.gch

.PHONY : run clean

