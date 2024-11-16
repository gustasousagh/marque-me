import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import { Trash, Video } from "lucide-react";
import React from "react";
import { EmptyState } from "./EmptyState";
import { Button } from "@/components/ui/button";

const MeetingsPage = () => {
  // Dados fictícios para testar a UI
  const fakeMeetings = [
    {
      id: "1",
      title: "Reunião com Psicologa",
      startTime: Date.now() / 1000, // Hora atual em segundos
      endTime: Date.now() / 1000 + 3600, // 1 hora depois
      conferencingUrl: "https://meet.fakeurl.com/meeting-1",
      participantName: "João Silva",
    },
    {
      id: "2",
      title: "Corte de cabelo",
      startTime: Date.now() / 1000 - 7200, // 2 horas atrás
      endTime: Date.now() / 1000 - 3600, // 1 hora atrás
      conferencingUrl: "https://meet.fakeurl.com/meeting-2",
      participantName: "Maria Souza",
    },
  ];

  return (
    <>
      {fakeMeetings.length < 1 ? (
        <EmptyState
          title="Nenhuma reunião encontrada"
          description="Você ainda não tem nenhuma reunião."
          buttonText="Criar um novo tipo de evento"
          href="/dashboard/new"
        />
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Agendamentos</CardTitle>
            <CardDescription>
              Veja eventos futuros e passados reservados por meio dos seus links
              de tipos de evento.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {fakeMeetings.map((item) => (
              <form key={item.id}>
                <div className="flex flex-row gap-x-2 text-xs lg:text-sm justify-between items-center">
                  <div>
                    <p className="text-muted-foreground ">
                      {format(new Date(item.startTime * 1000), "hh:mm a")} -{" "}
                    </p>
                    <p className="text-muted-foreground text-xs lg:text-sm pt-1">
                      {format(new Date(item.startTime * 1000), "HH:mm")} -{" "}
                      {format(new Date(item.endTime * 1000), "HH:mm")}
                    </p>
                    <div className="flex items-center mt-1">
                      <Video className="size-4 mr-2 text-primary" />{" "}
                      <a
                        className="text-xs lg:text-sm shrink-0 text-primary underline underline-offset-4"
                        target="_blank"
                        href={item.conferencingUrl}
                      >
                        Entrar na Reunião
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-start">
                    <h2 className=" font-medium truncate">{item.title}</h2>
                    <p className=" text-muted-foreground">
                      Você e {item.participantName}
                    </p>
                  </div>
                  <Button variant="destructive" className="w-fit flex ml-auto">
                    <Trash className="size-4" />
                  </Button>
                </div>
                <Separator className="my-3" />
              </form>
            ))}
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default MeetingsPage;
