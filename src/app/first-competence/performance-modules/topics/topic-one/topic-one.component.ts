import {Component, OnInit} from '@angular/core';
import {DefinitionService} from "../../services/definition.service";
import {TipService} from "../../services/tip.service";
import {TopicService} from "../../services/topic.service";

@Component({
  selector: 'app-topic-one',
  templateUrl: './topic-one.component.html',
  styleUrl: './topic-one.component.css'
})
export class TopicOneComponent implements OnInit {
  definitions: any[] = [];
  tips: any[] = [];
  topic: any;

  // topicId para fracciones
  private topicId: number = 1;

  constructor(
    private definitionService: DefinitionService,
    private tipService: TipService,
    private topicService: TopicService  // Se añade el TopicService
  ) {
  }

  ngOnInit(): void {
    this.loadTopic();
  }

  loadTopic(): void {
    // Cargar el topic con id 1 desde TopicService
    this.topicService.getTopic(this.topicId).subscribe((topic: any) => {
      this.topic = topic;
      this.loadContent();  // Llamar a cargar contenido cuando se tenga el topic
    });
  }

  loadContent(): void {
    // Cargar las definiciones desde el servicio DefinitionService
    this.definitionService.getDefinitions().subscribe((data: any) => {
      // Filtrar solo las definiciones que pertenecen al topic con id 1
      this.definitions = data.filter((definition: any) => definition.topicId === this.topicId);
    });

    // Cargar los tips desde el servicio TipService
    this.tipService.getTips().subscribe((data: any) => {
      // Filtrar solo los tips que pertenecen al topic con id 1
      this.tips = data.filter((tip: any) => tip.topicId === this.topicId);
    });
  }
}
