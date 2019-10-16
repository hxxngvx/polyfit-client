import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Select, Table, Icon } from 'antd'
import { getAllLevel } from '../../../api/level.api';
import { getAllExercises } from '../../../api/exercises.api';
const { Option } = Select;

const ExercisesForm = (props) => {

    const [exerData, setExerData] = useState([])
    const [levelData, setLevelData] = useState([])

    const { getFieldDecorator } = props.form

    useEffect(() => {
        getLevelData()
        getExercisesData()
    }, [])

    const getLevelData = async () => {
        try {
            const data = await getAllLevel();
            console.log(data)
            return setLevelData(data);
        }
        catch (err) {
            console.log(err);
        }
    }

    const getExercisesData = async () => {
        try {
            const data = await getAllExercises();
            return setExerData(data)
        } catch (err) {
            console.log(err)
        }
    }

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Introduction',
            dataIndex: 'introduction',
            key: 'introduction',
            width: 150
        },
        {
            title: 'Content',
            dataIndex: 'content',
            key: 'content',
        },
        {
            title: 'Tips',
            dataIndex: 'tips',
            key: 'tips',
        },
        {
            title: 'Sets',
            dataIndex: 'sets',
            key: 'sets',
        },
        {
            title: 'Rest',
            dataIndex: 'rest',
            key: 'rest',
        },
        {
            title: 'Video url',
            dataIndex: 'video_url',
            key: 'video_url',
        },
        {
            title: 'Image url',
            dataIndex: 'image_url',
            key: 'image_url',
            width: 300
        },
        {
            title: 'ID Level',
            dataIndex: 'id_level',
            key: 'id_level',
        },
        {
            title: 'Edit',
            dataIndex: 'edit',
            key: 'edit',
            fixed: 'right',
            width: 100,
            render: () => <Icon type="edit" />

        },
        {
            title: 'Delete',
            dataIndex: 'delete',
            key: 'delete',
            fixed: 'right',
            width: 100,
            render: () => <Icon type="delete" />
        }
    ];

    const handleSubmit = () => {

    }

    return (
        <React.Fragment>
            <div className="container">
                <Form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-sm-6">
                            <Form.Item label="Title">
                                {getFieldDecorator('title', {
                                    // rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input
                                        size="large"
                                        placeholder="Title"
                                    />,
                                )}
                            </Form.Item>
                        </div>
                        <div className="col-sm-6">
                            <Form.Item label="Introduction">
                                {getFieldDecorator('introduction', {
                                    // rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        size="large"
                                        placeholder="Introduction"
                                    />,
                                )}
                            </Form.Item>
                        </div>
                        <div className="col-sm-6">
                            <Form.Item label="Content">
                                {getFieldDecorator('content', {
                                    // rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        size="large"
                                        placeholder="Content"
                                    />,
                                )}
                            </Form.Item>
                        </div>
                        <div className="col-sm-6">
                            <Form.Item label="Tips">
                                {getFieldDecorator('tips', {
                                    // rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        size="large"
                                        placeholder="Tips"
                                    />,
                                )}
                            </Form.Item>
                        </div>
                        <div className="col-sm-6">
                            <Form.Item label="Sets">
                                {getFieldDecorator('sets', {
                                    // rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        size="large"
                                        placeholder="Sets"
                                    />,
                                )}
                            </Form.Item>
                        </div>
                        <div className="col-sm-6">
                            <Form.Item label="Reps">
                                {getFieldDecorator('reps', {
                                    // rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        size="large"
                                        placeholder="Reps"
                                    />,
                                )}
                            </Form.Item>
                        </div>
                        <div className="col-sm-6">
                            <Form.Item label="Rest">
                                {getFieldDecorator('rest', {
                                    // rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        size="large"
                                        placeholder="Rest"
                                    />,
                                )}
                            </Form.Item>
                        </div>
                        <div className="col-sm-6">
                            <Form.Item label="Video url">
                                {getFieldDecorator('video_url', {
                                    // rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        size="large"
                                        placeholder="Video url"
                                    />,
                                )}
                            </Form.Item>
                        </div>
                        <div className="col-sm-6">
                            <Form.Item label="Image url">
                                {getFieldDecorator('image_url', {
                                    // rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        size="large"
                                        placeholder="Image url"
                                    />,
                                )}
                            </Form.Item>
                        </div>
                        <div className="col-sm-6">
                            <Form.Item label="ID Level">
                                {getFieldDecorator('id_level', {
                                    // rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Select size="large">
                                        {levelData.map((element, key) => {
                                            // console.log(element)
                                            return <Option key={key} value={element.title}>{element.title}</Option>
                                        })}
                                    </Select>
                                )}
                            </Form.Item>
                        </div>
                        <div className="col-sm">
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Submit
                            </Button>
                        </div>
                    </div>
                </Form>

                <div className="row">
                    <div className="col-sm">
                        {exerData && <Table dataSource={exerData} columns={columns} scroll={{ x: 1300 }} />}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const Exercises = Form.create({ name: 'exercises_form' })(ExercisesForm);

export default Exercises