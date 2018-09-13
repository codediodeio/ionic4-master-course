# Ionic Master Course

Enroll in the Course

ionic cordova plugin add ionic-plugin-deeplinks --variable URL_SCHEME=ionic4-fire --variable DEEPLINK_SCHEME=https --variable DEEPLINK_HOST=ionic4-fire.firebaseapp.com --variable ANDROID_PATH_PREFIX=/

functions TSConfig

"skipLibCheck": true

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

BUILD Android

ionic cordova build android --prod --release

keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk alias_name

~/Library/Android/sdk/build-tools/28.0.2/zipalign -v 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk IonFire-0-0-1.apk

~/Library/Android/sdk/build-tools/28.0.2/apksigner verify IonFire-0-0-1.apk
