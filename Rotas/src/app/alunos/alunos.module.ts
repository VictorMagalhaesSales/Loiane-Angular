import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';
import { AlunosGuard } from './alunos.guard';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';
import { FormsModule } from '@angular/forms';
import { AlunosService } from './alunos.service';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosComponent } from './alunos.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';


@NgModule({
    declarations: [
        AlunosComponent,
        AlunoFormComponent,
        AlunoDetalheComponent
    ],
    imports: [
        CommonModule,
        AlunosRoutingModule,
        FormsModule
    ],
    exports: [],
    providers: [AlunosService, AlunosDeactivateGuard, AlunosGuard, AlunoDetalheResolver]
})
export class AlunosModule {}