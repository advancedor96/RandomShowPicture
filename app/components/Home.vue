<template>
  <Page class="page">
    <StackLayout>
      <Label text="hi"></Label>
      <Button text="pick" @tap="goPick"></Button>
      <ListView v-if="files.length!==0" for="(f, idx) in files" :key="idx">
        <v-template>
          <Image :src="f.file"></Image>
        </v-template>
      </ListView>
    </StackLayout>
  </Page>
</template>

<script>
import {
  Mediafilepicker,
  ImagePickerOptions,
  VideoPickerOptions,
  AudioPickerOptions,
  FilePickerOptions
} from "nativescript-mediafilepicker";
export default {
  mounted(){
    setTimeout(() => {
      this.goPick();
      
    }, 100);
  },
  data: ()=>({
    files: []
  }),
  methods:{
    goPick(){

      let options= {
          android: {
              isCaptureMood: false, // if true then camera will open directly.
              isNeedCamera: true,
              maxNumberFiles: 10,
              isNeedFolderList: true
          }, ios: {
              isCaptureMood: false, // if true then camera will open directly.
              maxNumberFiles: 10
          }
      };

      let mediafilepicker = new Mediafilepicker();
      mediafilepicker.openImagePicker(options);

      mediafilepicker.on("getFiles",  (res) =>{
          let results = res.object.get('results');
          this.files = results
      });

      mediafilepicker.on("error",  (res)=> {
          let msg = res.object.get('msg');
          console.log(msg);
      });

      mediafilepicker.on("cancel",  (res)=> {
          let msg = res.object.get('msg');
          console.log(msg);
      });
    }
  }
};
</script>

<style>
</style>
