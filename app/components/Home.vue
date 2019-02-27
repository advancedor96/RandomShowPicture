<template>
  <Page class="page">
    <StackLayout>
      <FlexboxLayout height="10%">
        <Button text="pick" @tap="goPick"></Button>
        <Button text="Random" @tap="goRandom"></Button>
      </FlexboxLayout>
      <ListView for="f in files" :key="idx" style="height: 90%" ref="myList">
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
  created(){
    this.mediafilepicker = new Mediafilepicker();
  },
  mounted(){
    setTimeout(() => {
      this.goPick();
      
    }, 100);
  },
  data: ()=>({
    mediafilepicker: null,
    files: []
  }),
  methods:{
    goRandom(){
      this.files = this.shuffle(this.files);
      this.$refs.myList.refresh();
    },
    shuffle(array){
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    },
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

      this.mediafilepicker.openImagePicker(options);

      this.mediafilepicker.on("getFiles",  (res) =>{
          let results = res.object.get('results');
          this.files = results
      });

      this.mediafilepicker.on("error",  (res)=> {
          let msg = res.object.get('msg');
          console.log(msg);
      });

      this.mediafilepicker.on("cancel",  (res)=> {
          let msg = res.object.get('msg');
          console.log(msg);
      });
    }
  }
};
</script>

<style>
</style>
