async function runIntegrationTests() {
  console.log('--- RUNNING INTEGRATION API TESTS ---');
  let passed = 0;
  let failed = 0;

  // Test 1: Frontend SPA entrypoint
  try {
    const res = await fetch('http://localhost:3000/');
    const text = await res.text();
    if (res.status === 200 && text.includes('id="root"')) {
      console.log('✓ Test 1 Passed: GET / served index.html successfully');
      passed++;
    } else {
      console.error('✗ Test 1 Failed: Status', res.status);
      failed++;
    }
  } catch (e: any) {
    console.error('✗ Test 1 Failed:', e.message);
    failed++;
  }

  // Test 2: /api/check-api validation
  try {
    const res = await fetch('http://localhost:3000/api/check-api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    });
    const data = await res.json();
    if (res.status === 400 && data.success === false) {
      console.log('✓ Test 2 Passed: POST /api/check-api empty key rejected correctly');
      passed++;
    } else {
      console.error('✗ Test 2 Failed:', res.status, data);
      failed++;
    }
  } catch (e: any) {
    console.error('✗ Test 2 Failed:', e.message);
    failed++;
  }

  // Test 3: /api/generate-quiz (offline mode)
  try {
    const res = await fetch('http://localhost:3000/api/generate-quiz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        lessonIds: ['tin8-bai-1'],
        lessons: ['Bài 1: Lược sử công cụ tính toán'],
        count: 5,
        difficulty: 'de',
        gradeNumber: 8,
        sourcePreference: 'offline',
      }),
    });
    const data = await res.json();
    if (res.status === 200 && data.success && data.questions?.length === 5) {
      console.log('✓ Test 3 Passed: POST /api/generate-quiz generated 5 questions');
      passed++;
    } else {
      console.error('✗ Test 3 Failed:', res.status, data);
      failed++;
    }
  } catch (e: any) {
    console.error('✗ Test 3 Failed:', e.message);
    failed++;
  }

  // Test 4: /api/explain-question
  try {
    const res = await fetch('http://localhost:3000/api/explain-question', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        question: 'Ai sáng chế ra Pascaline?',
        options: ['Pascal', 'Babbage', 'Leibniz', 'Aiken'],
        correctAnswer: 0,
        explanation: 'Blaise Pascal năm 1642.',
      }),
    });
    const data = await res.json();
    if (res.status === 200 && data.explanation) {
      console.log('✓ Test 4 Passed: POST /api/explain-question returned explanation');
      passed++;
    } else {
      console.error('✗ Test 4 Failed:', res.status, data);
      failed++;
    }
  } catch (e: any) {
    console.error('✗ Test 4 Failed:', e.message);
    failed++;
  }

  // Test 5: /api/parse-exam-document
  try {
    const rawContent =
      'Câu 1: Thông tin là gì?\nA. Dữ liệu\n*B. Hiểu biết của con người\nC. Số liệu\nD. Hình ảnh\nLời giải: SGK Tin học';
    const base64Data = Buffer.from(rawContent).toString('base64');
    const res = await fetch('http://localhost:3000/api/parse-exam-document', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        filename: 'de_kiem_tra.txt',
        fileBase64: base64Data,
        mimeType: 'text/plain',
        gradeNumber: 8,
      }),
    });
    const data = await res.json();
    if (res.status === 200 && data.success && data.questions?.length >= 1) {
      console.log('✓ Test 5 Passed: POST /api/parse-exam-document parsed questions successfully');
      passed++;
    } else {
      console.error('✗ Test 5 Failed:', res.status, data);
      failed++;
    }
  } catch (e: any) {
    console.error('✗ Test 5 Failed:', e.message);
    failed++;
  }

  console.log(`SUMMARY: Passed ${passed}/5, Failed ${failed}`);
}

runIntegrationTests();
