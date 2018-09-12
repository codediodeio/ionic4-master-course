# Ionic Master Course

Enroll in the Course

npm install --save @ionic-native/firebase@beta

ionic cordova plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=com.googleusercontent.apps.1085404550227-0mrc1eels3bch1pvt2740nj7uqqakm10

Gradle Build issue

https://github.com/EddyVerbruggen/cordova-plugin-googleplus/issues/484
https://github.com/EddyVerbruggen/cordova-plugin-googleplus/issues/488

https://github.com/EddyVerbruggen/nativescript-plugin-firebase#includegradle-failed-to-apply-plugin--for-input-string-

in gradle.build

```
    dependencies {
        classpath 'com.android.tools.build:gradle:3.0.0'
        classpath 'com.google.gms:google-services:+' // <-- add here
    }
```

in gplus and firebase plugin.build, change version to +

classpath 'com.google.gms:google-services:+'

Remove this line from one of them
// ext.postBuildExtras = {
// apply plugin: com.google.gms.googleservices.GoogleServicesPlugin
// }
