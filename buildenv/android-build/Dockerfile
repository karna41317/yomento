FROM ubuntu:16.04

# Setup android build environment
RUN dpkg --add-architecture i386
RUN apt-get update && apt-get install -y libc6-i386
RUN apt-get update && apt-get install -y zlib1g:i386
RUN apt-get update && apt-get install -y libstdc++6:i386
RUN apt-get update && apt-get install -y openjdk-8-jdk
RUN apt-get update && apt-get install -y gradle
RUN apt-get update && apt-get install -y wget
RUN cd /opt\
 && wget -nv https://dl.google.com/android/android-sdk_r24.4.1-linux.tgz\
 && tar -xvf android-sdk_r24.4.1-linux.tgz\
 && ( sleep 5 && while [ 1 ]; do sleep 1; echo y; done )\
 | /opt/android-sdk-linux/tools/android --silent update sdk --no-ui --all --filter \
android-25,\
android-24,\
android-23,\
android-22,\
platform-tools,\
build-tools-25.0.3,\
build-tools-25.0.2,\
build-tools-25.0.1,\
build-tools-25.0.0,\
build-tools-23.0.3,\
build-tools-23.0.1,\
build-tools-22.0.1,\
extra-android-m2repository,\
extra-google-m2repository
ENV ANDROID_HOME /opt/android-sdk-linux

# Install fastlane
RUN apt-get update && apt-get install -y ruby-dev
RUN apt-get update && apt-get install -y build-essential
RUN gem update && gem install fastlane
RUN gem cleanup

# Install git
RUN apt-get update && apt-get install -y git

# Install nodejs and RN
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get update && apt-get install -y nodejs
RUN npm install -g react-native-cli

# Install yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install yarn
RUN yarn --version
