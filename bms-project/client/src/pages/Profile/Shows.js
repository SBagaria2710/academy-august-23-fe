import { Col, Form, Modal, Row, Table } from "antd";
import React, { useState } from "react";
import Button from "../../components/Button";
import moment from "moment";

function Shows({ openShowsModal, setOpenShowsModal, theatre }) {
  const [view, setView] = useState("table");
  const [shows, setShows] = useState([]);
  const [movies, setMovies] = useState([]);

  const columns = [
    {
      title: "Show Name",
      dataIndex: "name",
    },
    {
      title: "Date",
      dataIndex: "date",
      render: (date) => {
        return moment(date).format("MMM Do YYYY");
      },
    },
    {
      title: "Time",
      dataIndex: "time",
    },
    {
      title: "Movie",
      dataIndex: "movie",
      render: (_, rowData) => {
        return rowData.movie.title;
      },
    },
    {
      title: "Ticket Price",
      dataIndex: "ticketPrice",
    },
    {
      title: "Total Seats",
      dataIndex: "totalSeats",
    },
    {
      title: "Available Seats",
      dataIndex: "availableSeats",
      render: (_, rowData) => {
        return rowData.totalSeats - rowData.bookedSeats.length;
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, rowData) => {
        return (
          <div className="flex gap-1 items-center">
            {rowData.bookedSeats.length === 0 && (
              <i
                className="ri-delete-bin-line"
                // onClick={() => {
                //   handleDelete(record._id);
                // }}
              ></i>
            )}
          </div>
        );
      },
    },
  ];
  return (
    <Modal
      open
      onCancel={() => setOpenShowsModal(false)}
      width={1400}
      footer={null}
    >
      <h1 className="text-md uppercase mb-1">Theatre: {theatre.name}</h1>
      <hr />
      <div className="flex justify-between mt-1 mb-1 items-center">
        <h1 className="text-md uppercase">
          {view === "table" ? "Shows" : "Add Show"}
        </h1>
        {view === "table" && (
          <Button
            variant="outlined"
            title="Add Show"
            onClick={() => {
              setView("form");
            }}
          />
        )}
      </div>

      {view === "table" && <Table columns={columns} dataSource={shows} />}

      {view === "form" && (
        <Form layout="vertical" onFinish={() => {}}>
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Form.Item
                label="Show Name"
                name="name"
                rules={[{ required: true, message: "Please input show name!" }]}
              >
                <input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Date"
                name="date"
                rules={[{ required: true, message: "Please input show date!" }]}
              >
                <input type="date" min={new Date()} />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                label="Time"
                name="time"
                rules={[{ required: true, message: "Please input show time!" }]}
              >
                <input type="time" />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                label="Movie"
                name="movie"
                rules={[{ required: true, message: "Please select movie!" }]}
              >
                <select>
                  <option value="">Select Movie</option>
                  {movies.map((movie) => (
                    <option value={movie._id}>{movie.title}</option>
                  ))}
                </select>
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                label="Ticket Price"
                name="ticketPrice"
                rules={[
                  { required: true, message: "Please input ticket price!" },
                ]}
              >
                <input type="number" />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                label="Total Seats"
                name="totalSeats"
                rules={[
                  { required: true, message: "Please input total seats!" },
                ]}
              >
                <input type="number" />
              </Form.Item>
            </Col>
          </Row>

          <div className="flex justify-end gap-1">
            <Button
              variant="outlined"
              title="Cancel"
              onClick={() => {
                setView("table");
              }}
            />
            <Button variant="contained" title="SAVE" type="submit" />
          </div>
        </Form>
      )}
    </Modal>
  );
}

export default Shows;
