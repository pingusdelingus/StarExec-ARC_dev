#!/bin/bash
set -e
set -o pipefail

mkdir /home/starexec/bin
chown tomcat:star-web /home/starexec/bin
chmod 755 /home/starexec/bin

cp ../../solverAdditions/GetComputerInfo /home/starexec/bin
chown tomcat:star-web /home/starexec/bin/GetComputerInfo
chmod 755 /home/starexec/bin/GetComputerInfo

# cp ../../solverAdditions/runsolver /home/starexec/StarExec-deploy/src/org/starexec/config/sge/

cd /;
git clone https://github.com/utpalbora/runsolver.git
cd runsolver/src;
make -j `nproc`
cp runsolver /home/starexec/StarExec-deploy/src/org/starexec/config/sge/




