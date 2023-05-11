import { Component, Vue } from 'vue-property-decorator';
import { msalInstance } from '@/config/msalInstance';

@Component({
  components: {},
  name: 'hello-world',
})

class HelloWorldView extends Vue {
  // --------------------------------------------------------------------------
  // [Private] Fields
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Public] Constructor
  // --------------------------------------------------------------------------

  constructor() {
    super();
  }

  // --------------------------------------------------------------------------
  // [Public] Accessors
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Public] Methods
  // --------------------------------------------------------------------------
  async login() {
    const request = {
      scopes: ['openid', 'profile', 'email'], // Add any additional scopes required by your OAuth provider
    };

    try {
      const response = await msalInstance.loginPopup(request);
      console.log('Login successful', response);
      // Handle successful login
    } catch (error) {
      console.error('Login failed', error);
      // Handle login error
    }
  }

  // --------------------------------------------------------------------------
  // [Private] Event Handlers
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Private] Methods
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Private] Lifecycle Hooks
  // --------------------------------------------------------------------------

  private mounted() {
    // TODO: stuff to do when this component loads.
  }
}

export {
  HelloWorldView as default,
  HelloWorldView,
};
