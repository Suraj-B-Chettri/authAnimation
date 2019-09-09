import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var $ : any;
@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
url : any = "../../assets/beforeImage.jpg";
  constructor() { }

  ngOnInit() {
     $("#first").click(function(){
      // $("#second").removeClass('hiding');
      $("#third").click();
     })

     $('#show').on('click', function () {
      $('.center').show();
      $(this).hide();
  })

  $('#close').on('click', function () {
      $('.center').hide();
      $('#show').show();
  })
  }

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {


      var reader = new FileReader();

      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;

      }
      $("#second").removeClass('hiding')
      reader.readAsDataURL(event.target.files[0]);
      console.log(event.target.files[0]);
    }
  }



}

