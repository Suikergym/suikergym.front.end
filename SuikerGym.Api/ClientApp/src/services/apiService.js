// API configuration
// In development: no REACT_APP_API_URL is set, so calls are relative (e.g. /api/...)
// and always hit whichever port ASP.NET is running on (IIS Express or Kestrel).
// In production: REACT_APP_API_URL is set to the absolute production URL.
const API_BASE_URL = process.env.REACT_APP_API_URL ?? '';

/**
 * Submit contact form to the backend API
 * @param {Object} formData - Contact form data
 * @returns {Promise<Object>} - Response from the API
 */
export const submitContactForm = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        goal: formData.goal,
        firstName: formData.firstname,
        lastName: formData.lastname,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Er is een fout opgetreden');
    }

    return data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};

/**
 * Submit Breakfast Club registration
 * @param {Object} formData - Registration data (name, email, phone)
 * @returns {Promise<Object>} - Response from the API
 */
export const submitBreakfastClubRegistration = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/breakfastclub/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Er is een fout opgetreden');
    }

    return data;
  } catch (error) {
    console.error('Error submitting Breakfast Club registration:', error);
    throw error;
  }
};

/**
 * Get all available programs
 * @returns {Promise<Array>} - List of programs
 */
export const getAllPrograms = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/programs`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch programs');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching programs:', error);
    throw error;
  }
};

/**
 * Get a specific program by ID
 * @param {string} id - Program identifier
 * @returns {Promise<Object>} - Program details
 */
export const getProgramById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/programs/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Program with ID ${id} not found`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching program:', error);
    throw error;
  }
};

/**
 * Check API health
 * @returns {Promise<Object>} - Health status
 */
export const checkApiHealth = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact/health`);
    return await response.json();
  } catch (error) {
    console.error('API health check failed:', error);
    return { status: 'unhealthy' };
  }
};
