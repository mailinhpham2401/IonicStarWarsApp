import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ApiService} from '../../services/api.service';
@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {
  films: Observable<any>;
  constructor(private router: Router,private api: ApiService){ }
//thay HttpClient thanh API Service
  ngOnInit() {
		this.films = this.api.getFilms();
		/* this.films = this.http.get('https://swapi.dev/api/films'); */
		/* this.films.subscribe(data => {
			console.log('mydata: ', data)
		}) */
  }
	
	openDetails(film){
		// Both of these would work!
		// But the standard Router is recommended.
		// this.navController.navigateForward(‘/tab/films/42');
		let split = film.url.split('/');
		let filmId = split[split.length-2];
		this.router.navigateByUrl(`/tabs/films/${filmId}`);
	}

	goToPlanets(){
		this.navController.navigateRoot(`/tabs/planets`)
	}
}
