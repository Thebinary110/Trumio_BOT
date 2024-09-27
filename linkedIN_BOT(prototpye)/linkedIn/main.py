import streamlit as st
import requests

# Function to scrape LinkedIn profile using Proxycurl API
def scrape_linkedin_profile(api_key, profile_url):
    headers = {'Authorization': 'Bearer ' + api_key}
    api_endpoint = 'https://nubela.co/proxycurl/api/v2/linkedin'
    
    response = requests.get(api_endpoint, params={'url': profile_url}, headers=headers)
    
    if response.status_code == 200:
        return response.json()  # Return the profile data as JSON
    else:
        return {'error': response.json().get('error', 'Failed to fetch data')}

# Streamlit app
st.title('LinkedIn Profile Scraper')

# Input field for API Key and LinkedIn profile URL
api_key = st.text_input('Enter your API Key:', '', type='password')
profile_url = st.text_input('Enter LinkedIn Profile URL:', 'https://www.linkedin.com/in/williamhgates')

if st.button('Scrape Profile'):
    if api_key and profile_url:
        result = scrape_linkedin_profile(api_key, profile_url)
        
        if 'error' in result:
            st.error(result['error'])
        else:
            st.subheader('Profile Information:')
            st.write(f"**Name:** {result.get('full_name', 'N/A')}")
            st.write(f"**Headline:** {result.get('headline', 'N/A')}")
            st.write(f"**Location:** {result.get('location', {}).get('country', 'N/A')}")

            st.write("**Experience:**")
            if 'experience' in result:
                for exp in result['experience']:
                    st.write(f"- **{exp.get('title', 'N/A')}** at {exp.get('company', 'N/A')} ({exp.get('start_date', 'N/A')} - {exp.get('end_date', 'N/A')})")
            else:
                st.write("No experience found.")

            st.write("**Education:**")
            if 'education' in result:
                for edu in result['education']:
                    st.write(f"- **{edu.get('degree', 'N/A')}** in {edu.get('field_of_study', 'N/A')} from {edu.get('school_name', 'N/A')} ({edu.get('start_year', 'N/A')} - {edu.get('end_year', 'N/A')})")
            else:
                st.write("No education found.")

            st.write("**Skills:**")
            if 'skills' in result:
                for skill in result['skills']:
                    st.write(f"- {skill.get('skill_name', 'N/A')}")
            else:
                st.write("No skills found.")

            st.write("**Connections:**")
            connections = result.get('connections', 'N/A')
            st.write(f"{connections} connections")

            st.write("**Summary:**")
            st.write(result.get('summary', 'No summary available.'))
    else:
        st.warning('Please fill in both fields.')

