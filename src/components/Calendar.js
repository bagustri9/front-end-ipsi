import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import api from "../api";
import Judul from "../menubar/judul";

const Calendar = () => {
  const [event, setEvent] = useState([]);
  const getDate = async () => {
    setEvent([]);
    await api.get("/api/peminjaman/date").then((res) => {
      res.data.map((data, index) => {
        setEvent((event) => [
          ...event,
          {
            title: data.nama_lengkap,
            start: data.tanggal_rental,
            end: data.rencana_pengembalian,
          },
        ]);
        console.log(event);
      });
    });
  };

  useEffect(() => {
    getDate();
  }, []);
  const handleDateClick = (dateClickInfo) => {
    console.log(dateClickInfo.dateStr);
  };
  return (
    <>
      <Judul
        title="Jadwal Peminjaman"
        info="Detail jadwal peminjaman dapat anda cek disini"
      />
      <div class="card col-10 offset-1 shadow mb-4">
        <div class="card-body row">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            dateClick={handleDateClick}
            initialView="dayGridMonth"
            weekends={false}
            events={event}
          />
        </div>
      </div>
    </>
  );
};

export default Calendar;
