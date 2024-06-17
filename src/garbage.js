<Form.Control
                    type="text"
                    placeholder="Enter main content of the post"
                    onChange={e=>setContent(e.target.value)}
                    value={content}
                />



                <Form.Group
                className="mb-3"
                controlId="formPublished"
            >
                <Form.Label>
                    Published
                </Form.Label>
                <Form.Control
                    type="date"
                    placeholder="Enter date of the post"
                    onChange={e=>setPublished(e.target.value)} 
                />
            </Form.Group>