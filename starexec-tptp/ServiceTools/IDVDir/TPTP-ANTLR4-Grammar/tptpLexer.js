// Generated from TPTP.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,98,704,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,
2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,
27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,
7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,
41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,
2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,
56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,
7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,
70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,
2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,7,84,2,
85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,2,91,7,91,2,92,
7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,97,7,97,2,98,7,98,2,99,7,
99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,7,103,2,104,7,104,2,105,7,105,
2,106,7,106,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,
1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,
1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,13,1,13,
1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,17,1,
17,1,17,1,17,1,18,1,18,1,19,1,19,1,20,1,20,1,21,1,21,1,21,1,22,1,22,1,22,
1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,
24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,
1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,1,
27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,
1,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,
30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,
1,31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,33,1,
33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,34,1,34,1,34,
1,34,1,34,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,36,1,36,1,
36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,
1,38,1,39,1,39,1,39,1,39,1,39,1,39,1,40,1,40,1,40,3,40,449,8,40,1,41,1,41,
1,41,3,41,454,8,41,1,42,1,42,1,43,1,43,1,44,1,44,1,45,1,45,1,46,1,46,1,47,
1,47,1,48,1,48,1,48,1,48,3,48,472,8,48,1,49,1,49,1,50,1,50,1,51,1,51,1,51,
1,51,1,52,1,52,1,52,1,53,1,53,1,53,1,54,1,54,1,54,1,54,1,55,1,55,1,55,1,
56,1,56,1,56,1,57,1,57,1,58,1,58,1,58,1,59,1,59,1,59,1,60,1,60,1,60,1,61,
1,61,1,62,1,62,1,63,1,63,1,63,1,64,1,64,1,64,1,65,1,65,1,66,1,66,1,67,1,
67,1,67,1,67,1,68,1,68,1,68,1,69,1,69,1,69,1,69,1,70,1,70,1,70,1,71,1,71,
1,71,1,72,1,72,1,73,1,73,1,73,1,74,1,74,1,74,1,75,1,75,1,76,1,76,1,77,1,
77,1,78,1,78,1,79,1,79,1,79,1,80,1,80,1,80,1,80,1,81,1,81,3,81,565,8,81,
1,82,1,82,1,82,1,83,1,83,3,83,572,8,83,1,84,1,84,3,84,576,8,84,1,85,1,85,
1,85,1,86,1,86,1,86,1,86,1,87,1,87,3,87,587,8,87,1,88,1,88,1,88,1,89,1,89,
1,90,1,90,3,90,596,8,90,1,91,1,91,5,91,600,8,91,10,91,12,91,603,9,91,1,92,
1,92,3,92,607,8,92,1,92,1,92,1,92,1,93,1,93,1,93,1,94,1,94,1,94,5,94,618,
8,94,10,94,12,94,621,9,94,1,95,1,95,3,95,625,8,95,1,96,1,96,1,96,1,97,1,
97,5,97,632,8,97,10,97,12,97,635,9,97,1,98,1,98,1,98,1,99,1,99,1,99,1,99,
1,99,1,100,1,100,5,100,647,8,100,10,100,12,100,650,9,100,1,101,1,101,5,101,
654,8,101,10,101,12,101,657,9,101,1,102,1,102,4,102,661,8,102,11,102,12,
102,662,1,102,1,102,1,103,1,103,4,103,669,8,103,11,103,12,103,670,1,103,
1,103,1,104,4,104,676,8,104,11,104,12,104,677,1,104,1,104,1,105,1,105,5,
105,684,8,105,10,105,12,105,687,9,105,1,105,1,105,1,106,1,106,1,106,1,106,
5,106,695,8,106,10,106,12,106,698,9,106,1,106,1,106,1,106,1,106,1,106,1,
696,0,107,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,
27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,49,25,
51,26,53,27,55,28,57,29,59,30,61,31,63,32,65,33,67,34,69,35,71,36,73,37,
75,38,77,39,79,40,81,0,83,0,85,0,87,0,89,0,91,0,93,0,95,0,97,0,99,41,101,
42,103,43,105,44,107,45,109,46,111,47,113,48,115,49,117,50,119,51,121,52,
123,53,125,54,127,55,129,56,131,57,133,58,135,59,137,60,139,61,141,62,143,
63,145,64,147,65,149,66,151,67,153,68,155,69,157,70,159,71,161,72,163,73,
165,74,167,75,169,76,171,77,173,78,175,79,177,80,179,81,181,82,183,83,185,
84,187,85,189,86,191,87,193,88,195,89,197,90,199,91,201,92,203,93,205,94,
207,95,209,96,211,97,213,98,1,0,12,3,0,32,33,35,91,93,126,2,0,34,34,92,92,
3,0,32,38,40,91,93,126,2,0,39,39,92,92,2,0,43,43,45,45,2,0,69,69,101,101,
1,0,49,57,1,0,48,57,1,0,97,122,1,0,65,90,3,0,9,10,13,13,32,32,2,0,10,10,
13,13,716,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,
11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,
0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,
1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,
0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,
0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,0,0,
67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,0,73,1,0,0,0,0,75,1,0,0,0,0,77,1,0,
0,0,0,79,1,0,0,0,0,99,1,0,0,0,0,101,1,0,0,0,0,103,1,0,0,0,0,105,1,0,0,0,
0,107,1,0,0,0,0,109,1,0,0,0,0,111,1,0,0,0,0,113,1,0,0,0,0,115,1,0,0,0,0,
117,1,0,0,0,0,119,1,0,0,0,0,121,1,0,0,0,0,123,1,0,0,0,0,125,1,0,0,0,0,127,
1,0,0,0,0,129,1,0,0,0,0,131,1,0,0,0,0,133,1,0,0,0,0,135,1,0,0,0,0,137,1,
0,0,0,0,139,1,0,0,0,0,141,1,0,0,0,0,143,1,0,0,0,0,145,1,0,0,0,0,147,1,0,
0,0,0,149,1,0,0,0,0,151,1,0,0,0,0,153,1,0,0,0,0,155,1,0,0,0,0,157,1,0,0,
0,0,159,1,0,0,0,0,161,1,0,0,0,0,163,1,0,0,0,0,165,1,0,0,0,0,167,1,0,0,0,
0,169,1,0,0,0,0,171,1,0,0,0,0,173,1,0,0,0,0,175,1,0,0,0,0,177,1,0,0,0,0,
179,1,0,0,0,0,181,1,0,0,0,0,183,1,0,0,0,0,185,1,0,0,0,0,187,1,0,0,0,0,189,
1,0,0,0,0,191,1,0,0,0,0,193,1,0,0,0,0,195,1,0,0,0,0,197,1,0,0,0,0,199,1,
0,0,0,0,201,1,0,0,0,0,203,1,0,0,0,0,205,1,0,0,0,0,207,1,0,0,0,0,209,1,0,
0,0,0,211,1,0,0,0,0,213,1,0,0,0,1,215,1,0,0,0,3,220,1,0,0,0,5,222,1,0,0,
0,7,225,1,0,0,0,9,230,1,0,0,0,11,235,1,0,0,0,13,240,1,0,0,0,15,245,1,0,0,
0,17,250,1,0,0,0,19,252,1,0,0,0,21,254,1,0,0,0,23,256,1,0,0,0,25,258,1,0,
0,0,27,260,1,0,0,0,29,266,1,0,0,0,31,269,1,0,0,0,33,273,1,0,0,0,35,277,1,
0,0,0,37,281,1,0,0,0,39,283,1,0,0,0,41,285,1,0,0,0,43,287,1,0,0,0,45,290,
1,0,0,0,47,293,1,0,0,0,49,304,1,0,0,0,51,316,1,0,0,0,53,322,1,0,0,0,55,330,
1,0,0,0,57,339,1,0,0,0,59,352,1,0,0,0,61,360,1,0,0,0,63,368,1,0,0,0,65,381,
1,0,0,0,67,393,1,0,0,0,69,406,1,0,0,0,71,415,1,0,0,0,73,421,1,0,0,0,75,427,
1,0,0,0,77,433,1,0,0,0,79,439,1,0,0,0,81,448,1,0,0,0,83,453,1,0,0,0,85,455,
1,0,0,0,87,457,1,0,0,0,89,459,1,0,0,0,91,461,1,0,0,0,93,463,1,0,0,0,95,465,
1,0,0,0,97,471,1,0,0,0,99,473,1,0,0,0,101,475,1,0,0,0,103,477,1,0,0,0,105,
481,1,0,0,0,107,484,1,0,0,0,109,487,1,0,0,0,111,491,1,0,0,0,113,494,1,0,
0,0,115,497,1,0,0,0,117,499,1,0,0,0,119,502,1,0,0,0,121,505,1,0,0,0,123,
508,1,0,0,0,125,510,1,0,0,0,127,512,1,0,0,0,129,515,1,0,0,0,131,518,1,0,
0,0,133,520,1,0,0,0,135,522,1,0,0,0,137,526,1,0,0,0,139,529,1,0,0,0,141,
533,1,0,0,0,143,536,1,0,0,0,145,539,1,0,0,0,147,541,1,0,0,0,149,544,1,0,
0,0,151,547,1,0,0,0,153,549,1,0,0,0,155,551,1,0,0,0,157,553,1,0,0,0,159,
555,1,0,0,0,161,558,1,0,0,0,163,564,1,0,0,0,165,566,1,0,0,0,167,571,1,0,
0,0,169,575,1,0,0,0,171,577,1,0,0,0,173,580,1,0,0,0,175,586,1,0,0,0,177,
588,1,0,0,0,179,591,1,0,0,0,181,595,1,0,0,0,183,597,1,0,0,0,185,606,1,0,
0,0,187,611,1,0,0,0,189,614,1,0,0,0,191,624,1,0,0,0,193,626,1,0,0,0,195,
629,1,0,0,0,197,636,1,0,0,0,199,639,1,0,0,0,201,644,1,0,0,0,203,651,1,0,
0,0,205,658,1,0,0,0,207,666,1,0,0,0,209,675,1,0,0,0,211,681,1,0,0,0,213,
690,1,0,0,0,215,216,5,116,0,0,216,217,5,112,0,0,217,218,5,105,0,0,218,219,
5,40,0,0,219,2,1,0,0,0,220,221,5,44,0,0,221,4,1,0,0,0,222,223,5,41,0,0,223,
224,5,46,0,0,224,6,1,0,0,0,225,226,5,116,0,0,226,227,5,104,0,0,227,228,5,
102,0,0,228,229,5,40,0,0,229,8,1,0,0,0,230,231,5,116,0,0,231,232,5,102,0,
0,232,233,5,102,0,0,233,234,5,40,0,0,234,10,1,0,0,0,235,236,5,116,0,0,236,
237,5,99,0,0,237,238,5,102,0,0,238,239,5,40,0,0,239,12,1,0,0,0,240,241,5,
102,0,0,241,242,5,111,0,0,242,243,5,102,0,0,243,244,5,40,0,0,244,14,1,0,
0,0,245,246,5,99,0,0,246,247,5,110,0,0,247,248,5,102,0,0,248,249,5,40,0,
0,249,16,1,0,0,0,250,251,5,40,0,0,251,18,1,0,0,0,252,253,5,41,0,0,253,20,
1,0,0,0,254,255,5,91,0,0,255,22,1,0,0,0,256,257,5,93,0,0,257,24,1,0,0,0,
258,259,5,58,0,0,259,26,1,0,0,0,260,261,5,36,0,0,261,262,5,108,0,0,262,263,
5,101,0,0,263,264,5,116,0,0,264,265,5,40,0,0,265,28,1,0,0,0,266,267,5,91,
0,0,267,268,5,93,0,0,268,30,1,0,0,0,269,270,5,91,0,0,270,271,5,46,0,0,271,
272,5,93,0,0,272,32,1,0,0,0,273,274,5,60,0,0,274,275,5,46,0,0,275,276,5,
62,0,0,276,34,1,0,0,0,277,278,5,123,0,0,278,279,5,46,0,0,279,280,5,125,0,
0,280,36,1,0,0,0,281,282,5,60,0,0,282,38,1,0,0,0,283,284,5,123,0,0,284,40,
1,0,0,0,285,286,5,125,0,0,286,42,1,0,0,0,287,288,5,41,0,0,288,289,5,125,
0,0,289,44,1,0,0,0,290,291,5,123,0,0,291,292,5,125,0,0,292,46,1,0,0,0,293,
294,5,105,0,0,294,295,5,110,0,0,295,296,5,102,0,0,296,297,5,101,0,0,297,
298,5,114,0,0,298,299,5,101,0,0,299,300,5,110,0,0,300,301,5,99,0,0,301,302,
5,101,0,0,302,303,5,40,0,0,303,48,1,0,0,0,304,305,5,105,0,0,305,306,5,110,
0,0,306,307,5,116,0,0,307,308,5,114,0,0,308,309,5,111,0,0,309,310,5,100,
0,0,310,311,5,117,0,0,311,312,5,99,0,0,312,313,5,101,0,0,313,314,5,100,0,
0,314,315,5,40,0,0,315,50,1,0,0,0,316,317,5,102,0,0,317,318,5,105,0,0,318,
319,5,108,0,0,319,320,5,101,0,0,320,321,5,40,0,0,321,52,1,0,0,0,322,323,
5,116,0,0,323,324,5,104,0,0,324,325,5,101,0,0,325,326,5,111,0,0,326,327,
5,114,0,0,327,328,5,121,0,0,328,329,5,40,0,0,329,54,1,0,0,0,330,331,5,99,
0,0,331,332,5,114,0,0,332,333,5,101,0,0,333,334,5,97,0,0,334,335,5,116,0,
0,335,336,5,111,0,0,336,337,5,114,0,0,337,338,5,40,0,0,338,56,1,0,0,0,339,
340,5,100,0,0,340,341,5,101,0,0,341,342,5,115,0,0,342,343,5,99,0,0,343,344,
5,114,0,0,344,345,5,105,0,0,345,346,5,112,0,0,346,347,5,116,0,0,347,348,
5,105,0,0,348,349,5,111,0,0,349,350,5,110,0,0,350,351,5,40,0,0,351,58,1,
0,0,0,352,353,5,105,0,0,353,354,5,113,0,0,354,355,5,117,0,0,355,356,5,111,
0,0,356,357,5,116,0,0,357,358,5,101,0,0,358,359,5,40,0,0,359,60,1,0,0,0,
360,361,5,115,0,0,361,362,5,116,0,0,362,363,5,97,0,0,363,364,5,116,0,0,364,
365,5,117,0,0,365,366,5,115,0,0,366,367,5,40,0,0,367,62,1,0,0,0,368,369,
5,97,0,0,369,370,5,115,0,0,370,371,5,115,0,0,371,372,5,117,0,0,372,373,5,
109,0,0,373,374,5,112,0,0,374,375,5,116,0,0,375,376,5,105,0,0,376,377,5,
111,0,0,377,378,5,110,0,0,378,379,5,115,0,0,379,380,5,40,0,0,380,64,1,0,
0,0,381,382,5,114,0,0,382,383,5,101,0,0,383,384,5,102,0,0,384,385,5,117,
0,0,385,386,5,116,0,0,386,387,5,97,0,0,387,388,5,116,0,0,388,389,5,105,0,
0,389,390,5,111,0,0,390,391,5,110,0,0,391,392,5,40,0,0,392,66,1,0,0,0,393,
394,5,110,0,0,394,395,5,101,0,0,395,396,5,119,0,0,396,397,5,95,0,0,397,398,
5,115,0,0,398,399,5,121,0,0,399,400,5,109,0,0,400,401,5,98,0,0,401,402,5,
111,0,0,402,403,5,108,0,0,403,404,5,115,0,0,404,405,5,40,0,0,405,68,1,0,
0,0,406,407,5,105,0,0,407,408,5,110,0,0,408,409,5,99,0,0,409,410,5,108,0,
0,410,411,5,117,0,0,411,412,5,100,0,0,412,413,5,101,0,0,413,414,5,40,0,0,
414,70,1,0,0,0,415,416,5,36,0,0,416,417,5,116,0,0,417,418,5,104,0,0,418,
419,5,102,0,0,419,420,5,40,0,0,420,72,1,0,0,0,421,422,5,36,0,0,422,423,5,
116,0,0,423,424,5,102,0,0,424,425,5,102,0,0,425,426,5,40,0,0,426,74,1,0,
0,0,427,428,5,36,0,0,428,429,5,102,0,0,429,430,5,111,0,0,430,431,5,102,0,
0,431,432,5,40,0,0,432,76,1,0,0,0,433,434,5,36,0,0,434,435,5,99,0,0,435,
436,5,110,0,0,436,437,5,102,0,0,437,438,5,40,0,0,438,78,1,0,0,0,439,440,
5,36,0,0,440,441,5,102,0,0,441,442,5,111,0,0,442,443,5,116,0,0,443,444,5,
40,0,0,444,80,1,0,0,0,445,449,7,0,0,0,446,447,5,92,0,0,447,449,7,1,0,0,448,
445,1,0,0,0,448,446,1,0,0,0,449,82,1,0,0,0,450,454,7,2,0,0,451,452,5,92,
0,0,452,454,7,3,0,0,453,450,1,0,0,0,453,451,1,0,0,0,454,84,1,0,0,0,455,456,
7,4,0,0,456,86,1,0,0,0,457,458,7,5,0,0,458,88,1,0,0,0,459,460,7,6,0,0,460,
90,1,0,0,0,461,462,7,7,0,0,462,92,1,0,0,0,463,464,7,8,0,0,464,94,1,0,0,0,
465,466,7,9,0,0,466,96,1,0,0,0,467,472,3,93,46,0,468,472,3,95,47,0,469,472,
3,91,45,0,470,472,5,95,0,0,471,467,1,0,0,0,471,468,1,0,0,0,471,469,1,0,0,
0,471,470,1,0,0,0,472,98,1,0,0,0,473,474,5,124,0,0,474,100,1,0,0,0,475,476,
5,38,0,0,476,102,1,0,0,0,477,478,5,60,0,0,478,479,5,61,0,0,479,480,5,62,
0,0,480,104,1,0,0,0,481,482,5,61,0,0,482,483,5,62,0,0,483,106,1,0,0,0,484,
485,5,60,0,0,485,486,5,61,0,0,486,108,1,0,0,0,487,488,5,60,0,0,488,489,5,
126,0,0,489,490,5,62,0,0,490,110,1,0,0,0,491,492,5,126,0,0,492,493,5,124,
0,0,493,112,1,0,0,0,494,495,5,126,0,0,495,496,5,38,0,0,496,114,1,0,0,0,497,
498,5,126,0,0,498,116,1,0,0,0,499,500,5,33,0,0,500,501,5,33,0,0,501,118,
1,0,0,0,502,503,5,33,0,0,503,504,5,62,0,0,504,120,1,0,0,0,505,506,5,33,0,
0,506,507,5,61,0,0,507,122,1,0,0,0,508,509,5,61,0,0,509,124,1,0,0,0,510,
511,5,33,0,0,511,126,1,0,0,0,512,513,5,63,0,0,513,514,5,63,0,0,514,128,1,
0,0,0,515,516,5,63,0,0,516,517,5,42,0,0,517,130,1,0,0,0,518,519,5,63,0,0,
519,132,1,0,0,0,520,521,5,94,0,0,521,134,1,0,0,0,522,523,5,64,0,0,523,524,
5,64,0,0,524,525,5,43,0,0,525,136,1,0,0,0,526,527,5,64,0,0,527,528,5,43,
0,0,528,138,1,0,0,0,529,530,5,64,0,0,530,531,5,64,0,0,531,532,5,45,0,0,532,
140,1,0,0,0,533,534,5,64,0,0,534,535,5,45,0,0,535,142,1,0,0,0,536,537,5,
64,0,0,537,538,5,61,0,0,538,144,1,0,0,0,539,540,5,64,0,0,540,146,1,0,0,0,
541,542,5,58,0,0,542,543,5,61,0,0,543,148,1,0,0,0,544,545,5,61,0,0,545,546,
5,61,0,0,546,150,1,0,0,0,547,548,5,62,0,0,548,152,1,0,0,0,549,550,5,42,0,
0,550,154,1,0,0,0,551,552,5,43,0,0,552,156,1,0,0,0,553,554,5,35,0,0,554,
158,1,0,0,0,555,556,5,60,0,0,556,557,5,60,0,0,557,160,1,0,0,0,558,559,5,
45,0,0,559,560,5,45,0,0,560,561,5,62,0,0,561,162,1,0,0,0,562,565,3,165,82,
0,563,565,3,167,83,0,564,562,1,0,0,0,564,563,1,0,0,0,565,164,1,0,0,0,566,
567,3,85,42,0,567,568,3,167,83,0,568,166,1,0,0,0,569,572,3,187,93,0,570,
572,3,185,92,0,571,569,1,0,0,0,571,570,1,0,0,0,572,168,1,0,0,0,573,576,3,
171,85,0,574,576,3,173,86,0,575,573,1,0,0,0,575,574,1,0,0,0,576,170,1,0,
0,0,577,578,3,85,42,0,578,579,3,173,86,0,579,172,1,0,0,0,580,581,3,181,90,
0,581,582,5,47,0,0,582,583,3,183,91,0,583,174,1,0,0,0,584,587,3,177,88,0,
585,587,3,179,89,0,586,584,1,0,0,0,586,585,1,0,0,0,587,176,1,0,0,0,588,589,
3,85,42,0,589,590,3,179,89,0,590,178,1,0,0,0,591,592,3,181,90,0,592,180,
1,0,0,0,593,596,5,48,0,0,594,596,3,183,91,0,595,593,1,0,0,0,595,594,1,0,
0,0,596,182,1,0,0,0,597,601,3,89,44,0,598,600,3,91,45,0,599,598,1,0,0,0,
600,603,1,0,0,0,601,599,1,0,0,0,601,602,1,0,0,0,602,184,1,0,0,0,603,601,
1,0,0,0,604,607,3,181,90,0,605,607,3,187,93,0,606,604,1,0,0,0,606,605,1,
0,0,0,607,608,1,0,0,0,608,609,3,87,43,0,609,610,3,191,95,0,610,186,1,0,0,
0,611,612,3,181,90,0,612,613,3,189,94,0,613,188,1,0,0,0,614,615,5,46,0,0,
615,619,3,91,45,0,616,618,3,91,45,0,617,616,1,0,0,0,618,621,1,0,0,0,619,
617,1,0,0,0,619,620,1,0,0,0,620,190,1,0,0,0,621,619,1,0,0,0,622,625,3,193,
96,0,623,625,3,195,97,0,624,622,1,0,0,0,624,623,1,0,0,0,625,192,1,0,0,0,
626,627,3,85,42,0,627,628,3,195,97,0,628,194,1,0,0,0,629,633,3,91,45,0,630,
632,3,91,45,0,631,630,1,0,0,0,632,635,1,0,0,0,633,631,1,0,0,0,633,634,1,
0,0,0,634,196,1,0,0,0,635,633,1,0,0,0,636,637,5,36,0,0,637,638,3,203,101,
0,638,198,1,0,0,0,639,640,5,36,0,0,640,641,5,36,0,0,641,642,1,0,0,0,642,
643,3,203,101,0,643,200,1,0,0,0,644,648,3,95,47,0,645,647,3,97,48,0,646,
645,1,0,0,0,647,650,1,0,0,0,648,646,1,0,0,0,648,649,1,0,0,0,649,202,1,0,
0,0,650,648,1,0,0,0,651,655,3,93,46,0,652,654,3,97,48,0,653,652,1,0,0,0,
654,657,1,0,0,0,655,653,1,0,0,0,655,656,1,0,0,0,656,204,1,0,0,0,657,655,
1,0,0,0,658,660,5,39,0,0,659,661,3,83,41,0,660,659,1,0,0,0,661,662,1,0,0,
0,662,660,1,0,0,0,662,663,1,0,0,0,663,664,1,0,0,0,664,665,5,39,0,0,665,206,
1,0,0,0,666,668,5,34,0,0,667,669,3,81,40,0,668,667,1,0,0,0,669,670,1,0,0,
0,670,668,1,0,0,0,670,671,1,0,0,0,671,672,1,0,0,0,672,673,5,34,0,0,673,208,
1,0,0,0,674,676,7,10,0,0,675,674,1,0,0,0,676,677,1,0,0,0,677,675,1,0,0,0,
677,678,1,0,0,0,678,679,1,0,0,0,679,680,6,104,0,0,680,210,1,0,0,0,681,685,
5,37,0,0,682,684,8,11,0,0,683,682,1,0,0,0,684,687,1,0,0,0,685,683,1,0,0,
0,685,686,1,0,0,0,686,688,1,0,0,0,687,685,1,0,0,0,688,689,6,105,0,0,689,
212,1,0,0,0,690,691,5,47,0,0,691,692,5,42,0,0,692,696,1,0,0,0,693,695,9,
0,0,0,694,693,1,0,0,0,695,698,1,0,0,0,696,697,1,0,0,0,696,694,1,0,0,0,697,
699,1,0,0,0,698,696,1,0,0,0,699,700,5,42,0,0,700,701,5,47,0,0,701,702,1,
0,0,0,702,703,6,106,0,0,703,214,1,0,0,0,21,0,448,453,471,564,571,575,586,
595,601,606,619,624,633,648,655,662,670,677,685,696,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class tptpLexer extends antlr4.Lexer {

    static grammarFileName = "TPTP.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'tpi('", "','", "').'", "'thf('", "'tff('", 
                         "'tcf('", "'fof('", "'cnf('", "'('", "')'", "'['", 
                         "']'", "':'", "'$let('", "'[]'", "'[.]'", "'<.>'", 
                         "'{.}'", "'<'", "'{'", "'}'", "')}'", "'{}'", "'inference('", 
                         "'introduced('", "'file('", "'theory('", "'creator('", 
                         "'description('", "'iquote('", "'status('", "'assumptions('", 
                         "'refutation('", "'new_symbols('", "'include('", 
                         "'$thf('", "'$tff('", "'$fof('", "'$cnf('", "'$fot('", 
                         "'|'", "'&'", "'<=>'", "'=>'", "'<='", "'<~>'", 
                         "'~|'", "'~&'", "'~'", "'!!'", "'!>'", "'!='", 
                         "'='", "'!'", "'??'", "'?*'", "'?'", "'^'", "'@@+'", 
                         "'@+'", "'@@-'", "'@-'", "'@='", "'@'", "':='", 
                         "'=='", "'>'", "'*'", "'+'", "'#'", "'<<'", "'-->'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, null, 
                          null, "Or", "And", "Iff", "Impl", "If", "Niff", 
                          "Nor", "Nand", "Not", "ForallComb", "TyForall", 
                          "Infix_inequality", "Infix_equality", "Forall", 
                          "ExistsComb", "TyExists", "Exists", "Lambda", 
                          "ChoiceComb", "Choice", "DescriptionComb", "Description", 
                          "EqComb", "App", "Assignment", "Identical", "Arrow", 
                          "Star", "Plus", "Hash", "Subtype_sign", "Gentzen_arrow", 
                          "Real", "Signed_real", "Unsigned_real", "Rational", 
                          "Signed_rational", "Unsigned_rational", "Integer", 
                          "Signed_integer", "Unsigned_integer", "Decimal", 
                          "Positive_decimal", "Decimal_exponent", "Decimal_fraction", 
                          "Dot_decimal", "Exp_integer", "Signed_exp_integer", 
                          "Unsigned_exp_integer", "Dollar_word", "Dollar_dollar_word", 
                          "Upper_word", "Lower_word", "Single_quoted", "Distinct_object", 
                          "WS", "Line_comment", "Block_comment" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "T__7", "T__8", "T__9", "T__10", "T__11", "T__12", 
                      "T__13", "T__14", "T__15", "T__16", "T__17", "T__18", 
                      "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
                      "T__25", "T__26", "T__27", "T__28", "T__29", "T__30", 
                      "T__31", "T__32", "T__33", "T__34", "T__35", "T__36", 
                      "T__37", "T__38", "T__39", "Do_char", "Sq_char", "Sign", 
                      "Exponent", "Non_zero_numeric", "Numeric", "Lower_alpha", 
                      "Upper_alpha", "Alpha_numeric", "Or", "And", "Iff", 
                      "Impl", "If", "Niff", "Nor", "Nand", "Not", "ForallComb", 
                      "TyForall", "Infix_inequality", "Infix_equality", 
                      "Forall", "ExistsComb", "TyExists", "Exists", "Lambda", 
                      "ChoiceComb", "Choice", "DescriptionComb", "Description", 
                      "EqComb", "App", "Assignment", "Identical", "Arrow", 
                      "Star", "Plus", "Hash", "Subtype_sign", "Gentzen_arrow", 
                      "Real", "Signed_real", "Unsigned_real", "Rational", 
                      "Signed_rational", "Unsigned_rational", "Integer", 
                      "Signed_integer", "Unsigned_integer", "Decimal", "Positive_decimal", 
                      "Decimal_exponent", "Decimal_fraction", "Dot_decimal", 
                      "Exp_integer", "Signed_exp_integer", "Unsigned_exp_integer", 
                      "Dollar_word", "Dollar_dollar_word", "Upper_word", 
                      "Lower_word", "Single_quoted", "Distinct_object", 
                      "WS", "Line_comment", "Block_comment" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

tptpLexer.EOF = antlr4.Token.EOF;
tptpLexer.T__0 = 1;
tptpLexer.T__1 = 2;
tptpLexer.T__2 = 3;
tptpLexer.T__3 = 4;
tptpLexer.T__4 = 5;
tptpLexer.T__5 = 6;
tptpLexer.T__6 = 7;
tptpLexer.T__7 = 8;
tptpLexer.T__8 = 9;
tptpLexer.T__9 = 10;
tptpLexer.T__10 = 11;
tptpLexer.T__11 = 12;
tptpLexer.T__12 = 13;
tptpLexer.T__13 = 14;
tptpLexer.T__14 = 15;
tptpLexer.T__15 = 16;
tptpLexer.T__16 = 17;
tptpLexer.T__17 = 18;
tptpLexer.T__18 = 19;
tptpLexer.T__19 = 20;
tptpLexer.T__20 = 21;
tptpLexer.T__21 = 22;
tptpLexer.T__22 = 23;
tptpLexer.T__23 = 24;
tptpLexer.T__24 = 25;
tptpLexer.T__25 = 26;
tptpLexer.T__26 = 27;
tptpLexer.T__27 = 28;
tptpLexer.T__28 = 29;
tptpLexer.T__29 = 30;
tptpLexer.T__30 = 31;
tptpLexer.T__31 = 32;
tptpLexer.T__32 = 33;
tptpLexer.T__33 = 34;
tptpLexer.T__34 = 35;
tptpLexer.T__35 = 36;
tptpLexer.T__36 = 37;
tptpLexer.T__37 = 38;
tptpLexer.T__38 = 39;
tptpLexer.T__39 = 40;
tptpLexer.Or = 41;
tptpLexer.And = 42;
tptpLexer.Iff = 43;
tptpLexer.Impl = 44;
tptpLexer.If = 45;
tptpLexer.Niff = 46;
tptpLexer.Nor = 47;
tptpLexer.Nand = 48;
tptpLexer.Not = 49;
tptpLexer.ForallComb = 50;
tptpLexer.TyForall = 51;
tptpLexer.Infix_inequality = 52;
tptpLexer.Infix_equality = 53;
tptpLexer.Forall = 54;
tptpLexer.ExistsComb = 55;
tptpLexer.TyExists = 56;
tptpLexer.Exists = 57;
tptpLexer.Lambda = 58;
tptpLexer.ChoiceComb = 59;
tptpLexer.Choice = 60;
tptpLexer.DescriptionComb = 61;
tptpLexer.Description = 62;
tptpLexer.EqComb = 63;
tptpLexer.App = 64;
tptpLexer.Assignment = 65;
tptpLexer.Identical = 66;
tptpLexer.Arrow = 67;
tptpLexer.Star = 68;
tptpLexer.Plus = 69;
tptpLexer.Hash = 70;
tptpLexer.Subtype_sign = 71;
tptpLexer.Gentzen_arrow = 72;
tptpLexer.Real = 73;
tptpLexer.Signed_real = 74;
tptpLexer.Unsigned_real = 75;
tptpLexer.Rational = 76;
tptpLexer.Signed_rational = 77;
tptpLexer.Unsigned_rational = 78;
tptpLexer.Integer = 79;
tptpLexer.Signed_integer = 80;
tptpLexer.Unsigned_integer = 81;
tptpLexer.Decimal = 82;
tptpLexer.Positive_decimal = 83;
tptpLexer.Decimal_exponent = 84;
tptpLexer.Decimal_fraction = 85;
tptpLexer.Dot_decimal = 86;
tptpLexer.Exp_integer = 87;
tptpLexer.Signed_exp_integer = 88;
tptpLexer.Unsigned_exp_integer = 89;
tptpLexer.Dollar_word = 90;
tptpLexer.Dollar_dollar_word = 91;
tptpLexer.Upper_word = 92;
tptpLexer.Lower_word = 93;
tptpLexer.Single_quoted = 94;
tptpLexer.Distinct_object = 95;
tptpLexer.WS = 96;
tptpLexer.Line_comment = 97;
tptpLexer.Block_comment = 98;



