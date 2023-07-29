import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Hero, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { filter, switchMap, tap } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent implements OnInit {

  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('', { nonNullable: true }),
    publisher: new FormControl<Publisher>( Publisher.DCComics ),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl('')
  });

  public publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  constructor(
    private herosService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {

    if( !this.router.url.includes('edit') ) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.herosService.getHeroById(id) ),
      ).subscribe( hero => {

        if( !hero ) {
          return this.router.navigateByUrl('/heroes');
        }

        this.heroForm.reset(hero);
        return;
      });

  }

  get currentHero(): Hero {
    const hero = this.heroForm.getRawValue() as Hero;

    return hero;
  }

  onSubmit() {

    console.log({
      formIsValid: this.heroForm.valid,
      value: this.heroForm.getRawValue()
    })

    if (this.heroForm.invalid) {
      return;
    }

    if( this.currentHero.id ) {
      this.herosService.updateHero(this.currentHero)
        .subscribe( hero => {
          this.showSnackBar(`${hero.superhero} updated!`);
          console.log('updated', hero)
        });

        return;
    }

    this.herosService.addHero(this.currentHero)
      .subscribe( hero => {
        this.router.navigate(['/heroes/edit', hero.id]);
        this.showSnackBar(`${hero.superhero} created!`);
        console.log('created', hero)
      });
  }

  onDeleteHero() {
    if( !this.currentHero.id ) {
      throw new Error('Hero ID is required');
    }

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.getRawValue()
    });

    dialogRef.afterClosed()
      .pipe(
        filter( (result: boolean) => result ),
        switchMap( () => this.herosService.deleteHeroById(this.currentHero.id!) ),
        filter( (wasDeleted: boolean) => wasDeleted ),
      )
      .subscribe( () => {
        this.showSnackBar(`${this.currentHero.superhero} deleted!`);
        this.router.navigate(['/heroes']);
      });

    // dialogRef.afterClosed().subscribe(result => {

    //   if( !result ) {
    //     return;
    //   }

    //   this.herosService.deleteHeroById(this.currentHero.id!)
    //     .subscribe( wasDeleted => {
    //       if( wasDeleted ) {
    //         this.showSnackBar(`${this.currentHero.superhero} deleted!`);
    //         this.router.navigate(['/heroes']);
    //       }
    //     });
    // });
  }

  showSnackBar(message: string): void {
    this.snackBar.open(message, 'done', {
      duration: 2500
    });
  }

}
