# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from . import outputs

__all__ = [
    'ListWebAppAuthSettingsSlotResult',
    'AwaitableListWebAppAuthSettingsSlotResult',
    'list_web_app_auth_settings_slot',
]

@pulumi.output_type
class ListWebAppAuthSettingsSlotResult:
    """
    Configuration settings for the Azure App Service Authentication / Authorization feature.
    """
    def __init__(__self__, aad_claims_authorization=None, additional_login_params=None, allowed_audiences=None, allowed_external_redirect_urls=None, auth_file_path=None, client_id=None, client_secret=None, client_secret_certificate_thumbprint=None, client_secret_setting_name=None, default_provider=None, enabled=None, facebook_app_id=None, facebook_app_secret=None, facebook_app_secret_setting_name=None, facebook_o_auth_scopes=None, git_hub_client_id=None, git_hub_client_secret=None, git_hub_client_secret_setting_name=None, git_hub_o_auth_scopes=None, google_client_id=None, google_client_secret=None, google_client_secret_setting_name=None, google_o_auth_scopes=None, id=None, is_auth_from_file=None, issuer=None, kind=None, microsoft_account_client_id=None, microsoft_account_client_secret=None, microsoft_account_client_secret_setting_name=None, microsoft_account_o_auth_scopes=None, name=None, runtime_version=None, system_data=None, token_refresh_extension_hours=None, token_store_enabled=None, twitter_consumer_key=None, twitter_consumer_secret=None, twitter_consumer_secret_setting_name=None, type=None, unauthenticated_client_action=None, validate_issuer=None):
        if aad_claims_authorization and not isinstance(aad_claims_authorization, str):
            raise TypeError("Expected argument 'aad_claims_authorization' to be a str")
        pulumi.set(__self__, "aad_claims_authorization", aad_claims_authorization)
        if additional_login_params and not isinstance(additional_login_params, list):
            raise TypeError("Expected argument 'additional_login_params' to be a list")
        pulumi.set(__self__, "additional_login_params", additional_login_params)
        if allowed_audiences and not isinstance(allowed_audiences, list):
            raise TypeError("Expected argument 'allowed_audiences' to be a list")
        pulumi.set(__self__, "allowed_audiences", allowed_audiences)
        if allowed_external_redirect_urls and not isinstance(allowed_external_redirect_urls, list):
            raise TypeError("Expected argument 'allowed_external_redirect_urls' to be a list")
        pulumi.set(__self__, "allowed_external_redirect_urls", allowed_external_redirect_urls)
        if auth_file_path and not isinstance(auth_file_path, str):
            raise TypeError("Expected argument 'auth_file_path' to be a str")
        pulumi.set(__self__, "auth_file_path", auth_file_path)
        if client_id and not isinstance(client_id, str):
            raise TypeError("Expected argument 'client_id' to be a str")
        pulumi.set(__self__, "client_id", client_id)
        if client_secret and not isinstance(client_secret, str):
            raise TypeError("Expected argument 'client_secret' to be a str")
        pulumi.set(__self__, "client_secret", client_secret)
        if client_secret_certificate_thumbprint and not isinstance(client_secret_certificate_thumbprint, str):
            raise TypeError("Expected argument 'client_secret_certificate_thumbprint' to be a str")
        pulumi.set(__self__, "client_secret_certificate_thumbprint", client_secret_certificate_thumbprint)
        if client_secret_setting_name and not isinstance(client_secret_setting_name, str):
            raise TypeError("Expected argument 'client_secret_setting_name' to be a str")
        pulumi.set(__self__, "client_secret_setting_name", client_secret_setting_name)
        if default_provider and not isinstance(default_provider, str):
            raise TypeError("Expected argument 'default_provider' to be a str")
        pulumi.set(__self__, "default_provider", default_provider)
        if enabled and not isinstance(enabled, bool):
            raise TypeError("Expected argument 'enabled' to be a bool")
        pulumi.set(__self__, "enabled", enabled)
        if facebook_app_id and not isinstance(facebook_app_id, str):
            raise TypeError("Expected argument 'facebook_app_id' to be a str")
        pulumi.set(__self__, "facebook_app_id", facebook_app_id)
        if facebook_app_secret and not isinstance(facebook_app_secret, str):
            raise TypeError("Expected argument 'facebook_app_secret' to be a str")
        pulumi.set(__self__, "facebook_app_secret", facebook_app_secret)
        if facebook_app_secret_setting_name and not isinstance(facebook_app_secret_setting_name, str):
            raise TypeError("Expected argument 'facebook_app_secret_setting_name' to be a str")
        pulumi.set(__self__, "facebook_app_secret_setting_name", facebook_app_secret_setting_name)
        if facebook_o_auth_scopes and not isinstance(facebook_o_auth_scopes, list):
            raise TypeError("Expected argument 'facebook_o_auth_scopes' to be a list")
        pulumi.set(__self__, "facebook_o_auth_scopes", facebook_o_auth_scopes)
        if git_hub_client_id and not isinstance(git_hub_client_id, str):
            raise TypeError("Expected argument 'git_hub_client_id' to be a str")
        pulumi.set(__self__, "git_hub_client_id", git_hub_client_id)
        if git_hub_client_secret and not isinstance(git_hub_client_secret, str):
            raise TypeError("Expected argument 'git_hub_client_secret' to be a str")
        pulumi.set(__self__, "git_hub_client_secret", git_hub_client_secret)
        if git_hub_client_secret_setting_name and not isinstance(git_hub_client_secret_setting_name, str):
            raise TypeError("Expected argument 'git_hub_client_secret_setting_name' to be a str")
        pulumi.set(__self__, "git_hub_client_secret_setting_name", git_hub_client_secret_setting_name)
        if git_hub_o_auth_scopes and not isinstance(git_hub_o_auth_scopes, list):
            raise TypeError("Expected argument 'git_hub_o_auth_scopes' to be a list")
        pulumi.set(__self__, "git_hub_o_auth_scopes", git_hub_o_auth_scopes)
        if google_client_id and not isinstance(google_client_id, str):
            raise TypeError("Expected argument 'google_client_id' to be a str")
        pulumi.set(__self__, "google_client_id", google_client_id)
        if google_client_secret and not isinstance(google_client_secret, str):
            raise TypeError("Expected argument 'google_client_secret' to be a str")
        pulumi.set(__self__, "google_client_secret", google_client_secret)
        if google_client_secret_setting_name and not isinstance(google_client_secret_setting_name, str):
            raise TypeError("Expected argument 'google_client_secret_setting_name' to be a str")
        pulumi.set(__self__, "google_client_secret_setting_name", google_client_secret_setting_name)
        if google_o_auth_scopes and not isinstance(google_o_auth_scopes, list):
            raise TypeError("Expected argument 'google_o_auth_scopes' to be a list")
        pulumi.set(__self__, "google_o_auth_scopes", google_o_auth_scopes)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if is_auth_from_file and not isinstance(is_auth_from_file, str):
            raise TypeError("Expected argument 'is_auth_from_file' to be a str")
        pulumi.set(__self__, "is_auth_from_file", is_auth_from_file)
        if issuer and not isinstance(issuer, str):
            raise TypeError("Expected argument 'issuer' to be a str")
        pulumi.set(__self__, "issuer", issuer)
        if kind and not isinstance(kind, str):
            raise TypeError("Expected argument 'kind' to be a str")
        pulumi.set(__self__, "kind", kind)
        if microsoft_account_client_id and not isinstance(microsoft_account_client_id, str):
            raise TypeError("Expected argument 'microsoft_account_client_id' to be a str")
        pulumi.set(__self__, "microsoft_account_client_id", microsoft_account_client_id)
        if microsoft_account_client_secret and not isinstance(microsoft_account_client_secret, str):
            raise TypeError("Expected argument 'microsoft_account_client_secret' to be a str")
        pulumi.set(__self__, "microsoft_account_client_secret", microsoft_account_client_secret)
        if microsoft_account_client_secret_setting_name and not isinstance(microsoft_account_client_secret_setting_name, str):
            raise TypeError("Expected argument 'microsoft_account_client_secret_setting_name' to be a str")
        pulumi.set(__self__, "microsoft_account_client_secret_setting_name", microsoft_account_client_secret_setting_name)
        if microsoft_account_o_auth_scopes and not isinstance(microsoft_account_o_auth_scopes, list):
            raise TypeError("Expected argument 'microsoft_account_o_auth_scopes' to be a list")
        pulumi.set(__self__, "microsoft_account_o_auth_scopes", microsoft_account_o_auth_scopes)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if runtime_version and not isinstance(runtime_version, str):
            raise TypeError("Expected argument 'runtime_version' to be a str")
        pulumi.set(__self__, "runtime_version", runtime_version)
        if system_data and not isinstance(system_data, dict):
            raise TypeError("Expected argument 'system_data' to be a dict")
        pulumi.set(__self__, "system_data", system_data)
        if token_refresh_extension_hours and not isinstance(token_refresh_extension_hours, float):
            raise TypeError("Expected argument 'token_refresh_extension_hours' to be a float")
        pulumi.set(__self__, "token_refresh_extension_hours", token_refresh_extension_hours)
        if token_store_enabled and not isinstance(token_store_enabled, bool):
            raise TypeError("Expected argument 'token_store_enabled' to be a bool")
        pulumi.set(__self__, "token_store_enabled", token_store_enabled)
        if twitter_consumer_key and not isinstance(twitter_consumer_key, str):
            raise TypeError("Expected argument 'twitter_consumer_key' to be a str")
        pulumi.set(__self__, "twitter_consumer_key", twitter_consumer_key)
        if twitter_consumer_secret and not isinstance(twitter_consumer_secret, str):
            raise TypeError("Expected argument 'twitter_consumer_secret' to be a str")
        pulumi.set(__self__, "twitter_consumer_secret", twitter_consumer_secret)
        if twitter_consumer_secret_setting_name and not isinstance(twitter_consumer_secret_setting_name, str):
            raise TypeError("Expected argument 'twitter_consumer_secret_setting_name' to be a str")
        pulumi.set(__self__, "twitter_consumer_secret_setting_name", twitter_consumer_secret_setting_name)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)
        if unauthenticated_client_action and not isinstance(unauthenticated_client_action, str):
            raise TypeError("Expected argument 'unauthenticated_client_action' to be a str")
        pulumi.set(__self__, "unauthenticated_client_action", unauthenticated_client_action)
        if validate_issuer and not isinstance(validate_issuer, bool):
            raise TypeError("Expected argument 'validate_issuer' to be a bool")
        pulumi.set(__self__, "validate_issuer", validate_issuer)

    @property
    @pulumi.getter(name="aadClaimsAuthorization")
    def aad_claims_authorization(self) -> Optional[str]:
        """
        Gets a JSON string containing the Azure AD Acl settings.
        """
        return pulumi.get(self, "aad_claims_authorization")

    @property
    @pulumi.getter(name="additionalLoginParams")
    def additional_login_params(self) -> Optional[Sequence[str]]:
        """
        Login parameters to send to the OpenID Connect authorization endpoint when
        a user logs in. Each parameter must be in the form "key=value".
        """
        return pulumi.get(self, "additional_login_params")

    @property
    @pulumi.getter(name="allowedAudiences")
    def allowed_audiences(self) -> Optional[Sequence[str]]:
        """
        Allowed audience values to consider when validating JWTs issued by 
        Azure Active Directory. Note that the <code>ClientID</code> value is always considered an
        allowed audience, regardless of this setting.
        """
        return pulumi.get(self, "allowed_audiences")

    @property
    @pulumi.getter(name="allowedExternalRedirectUrls")
    def allowed_external_redirect_urls(self) -> Optional[Sequence[str]]:
        """
        External URLs that can be redirected to as part of logging in or logging out of the app. Note that the query string part of the URL is ignored.
        This is an advanced setting typically only needed by Windows Store application backends.
        Note that URLs within the current domain are always implicitly allowed.
        """
        return pulumi.get(self, "allowed_external_redirect_urls")

    @property
    @pulumi.getter(name="authFilePath")
    def auth_file_path(self) -> Optional[str]:
        """
        The path of the config file containing auth settings.
        If the path is relative, base will the site's root directory.
        """
        return pulumi.get(self, "auth_file_path")

    @property
    @pulumi.getter(name="clientId")
    def client_id(self) -> Optional[str]:
        """
        The Client ID of this relying party application, known as the client_id.
        This setting is required for enabling OpenID Connection authentication with Azure Active Directory or 
        other 3rd party OpenID Connect providers.
        More information on OpenID Connect: http://openid.net/specs/openid-connect-core-1_0.html
        """
        return pulumi.get(self, "client_id")

    @property
    @pulumi.getter(name="clientSecret")
    def client_secret(self) -> Optional[str]:
        """
        The Client Secret of this relying party application (in Azure Active Directory, this is also referred to as the Key).
        This setting is optional. If no client secret is configured, the OpenID Connect implicit auth flow is used to authenticate end users.
        Otherwise, the OpenID Connect Authorization Code Flow is used to authenticate end users.
        More information on OpenID Connect: http://openid.net/specs/openid-connect-core-1_0.html
        """
        return pulumi.get(self, "client_secret")

    @property
    @pulumi.getter(name="clientSecretCertificateThumbprint")
    def client_secret_certificate_thumbprint(self) -> Optional[str]:
        """
        An alternative to the client secret, that is the thumbprint of a certificate used for signing purposes. This property acts as
        a replacement for the Client Secret. It is also optional.
        """
        return pulumi.get(self, "client_secret_certificate_thumbprint")

    @property
    @pulumi.getter(name="clientSecretSettingName")
    def client_secret_setting_name(self) -> Optional[str]:
        """
        The app setting name that contains the client secret of the relying party application.
        """
        return pulumi.get(self, "client_secret_setting_name")

    @property
    @pulumi.getter(name="defaultProvider")
    def default_provider(self) -> Optional[str]:
        """
        The default authentication provider to use when multiple providers are configured.
        This setting is only needed if multiple providers are configured and the unauthenticated client
        action is set to "RedirectToLoginPage".
        """
        return pulumi.get(self, "default_provider")

    @property
    @pulumi.getter
    def enabled(self) -> Optional[bool]:
        """
        <code>true</code> if the Authentication / Authorization feature is enabled for the current app; otherwise, <code>false</code>.
        """
        return pulumi.get(self, "enabled")

    @property
    @pulumi.getter(name="facebookAppId")
    def facebook_app_id(self) -> Optional[str]:
        """
        The App ID of the Facebook app used for login.
        This setting is required for enabling Facebook Login.
        Facebook Login documentation: https://developers.facebook.com/docs/facebook-login
        """
        return pulumi.get(self, "facebook_app_id")

    @property
    @pulumi.getter(name="facebookAppSecret")
    def facebook_app_secret(self) -> Optional[str]:
        """
        The App Secret of the Facebook app used for Facebook Login.
        This setting is required for enabling Facebook Login.
        Facebook Login documentation: https://developers.facebook.com/docs/facebook-login
        """
        return pulumi.get(self, "facebook_app_secret")

    @property
    @pulumi.getter(name="facebookAppSecretSettingName")
    def facebook_app_secret_setting_name(self) -> Optional[str]:
        """
        The app setting name that contains the app secret used for Facebook Login.
        """
        return pulumi.get(self, "facebook_app_secret_setting_name")

    @property
    @pulumi.getter(name="facebookOAuthScopes")
    def facebook_o_auth_scopes(self) -> Optional[Sequence[str]]:
        """
        The OAuth 2.0 scopes that will be requested as part of Facebook Login authentication.
        This setting is optional.
        Facebook Login documentation: https://developers.facebook.com/docs/facebook-login
        """
        return pulumi.get(self, "facebook_o_auth_scopes")

    @property
    @pulumi.getter(name="gitHubClientId")
    def git_hub_client_id(self) -> Optional[str]:
        """
        The Client Id of the GitHub app used for login.
        This setting is required for enabling Github login
        """
        return pulumi.get(self, "git_hub_client_id")

    @property
    @pulumi.getter(name="gitHubClientSecret")
    def git_hub_client_secret(self) -> Optional[str]:
        """
        The Client Secret of the GitHub app used for Github Login.
        This setting is required for enabling Github login.
        """
        return pulumi.get(self, "git_hub_client_secret")

    @property
    @pulumi.getter(name="gitHubClientSecretSettingName")
    def git_hub_client_secret_setting_name(self) -> Optional[str]:
        """
        The app setting name that contains the client secret of the Github
        app used for GitHub Login.
        """
        return pulumi.get(self, "git_hub_client_secret_setting_name")

    @property
    @pulumi.getter(name="gitHubOAuthScopes")
    def git_hub_o_auth_scopes(self) -> Optional[Sequence[str]]:
        """
        The OAuth 2.0 scopes that will be requested as part of GitHub Login authentication.
        This setting is optional
        """
        return pulumi.get(self, "git_hub_o_auth_scopes")

    @property
    @pulumi.getter(name="googleClientId")
    def google_client_id(self) -> Optional[str]:
        """
        The OpenID Connect Client ID for the Google web application.
        This setting is required for enabling Google Sign-In.
        Google Sign-In documentation: https://developers.google.com/identity/sign-in/web/
        """
        return pulumi.get(self, "google_client_id")

    @property
    @pulumi.getter(name="googleClientSecret")
    def google_client_secret(self) -> Optional[str]:
        """
        The client secret associated with the Google web application.
        This setting is required for enabling Google Sign-In.
        Google Sign-In documentation: https://developers.google.com/identity/sign-in/web/
        """
        return pulumi.get(self, "google_client_secret")

    @property
    @pulumi.getter(name="googleClientSecretSettingName")
    def google_client_secret_setting_name(self) -> Optional[str]:
        """
        The app setting name that contains the client secret associated with 
        the Google web application.
        """
        return pulumi.get(self, "google_client_secret_setting_name")

    @property
    @pulumi.getter(name="googleOAuthScopes")
    def google_o_auth_scopes(self) -> Optional[Sequence[str]]:
        """
        The OAuth 2.0 scopes that will be requested as part of Google Sign-In authentication.
        This setting is optional. If not specified, "openid", "profile", and "email" are used as default scopes.
        Google Sign-In documentation: https://developers.google.com/identity/sign-in/web/
        """
        return pulumi.get(self, "google_o_auth_scopes")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Resource Id.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="isAuthFromFile")
    def is_auth_from_file(self) -> Optional[str]:
        """
        "true" if the auth config settings should be read from a file,
        "false" otherwise
        """
        return pulumi.get(self, "is_auth_from_file")

    @property
    @pulumi.getter
    def issuer(self) -> Optional[str]:
        """
        The OpenID Connect Issuer URI that represents the entity which issues access tokens for this application.
        When using Azure Active Directory, this value is the URI of the directory tenant, e.g. https://sts.windows.net/{tenant-guid}/.
        This URI is a case-sensitive identifier for the token issuer.
        More information on OpenID Connect Discovery: http://openid.net/specs/openid-connect-discovery-1_0.html
        """
        return pulumi.get(self, "issuer")

    @property
    @pulumi.getter
    def kind(self) -> Optional[str]:
        """
        Kind of resource.
        """
        return pulumi.get(self, "kind")

    @property
    @pulumi.getter(name="microsoftAccountClientId")
    def microsoft_account_client_id(self) -> Optional[str]:
        """
        The OAuth 2.0 client ID that was created for the app used for authentication.
        This setting is required for enabling Microsoft Account authentication.
        Microsoft Account OAuth documentation: https://dev.onedrive.com/auth/msa_oauth.htm
        """
        return pulumi.get(self, "microsoft_account_client_id")

    @property
    @pulumi.getter(name="microsoftAccountClientSecret")
    def microsoft_account_client_secret(self) -> Optional[str]:
        """
        The OAuth 2.0 client secret that was created for the app used for authentication.
        This setting is required for enabling Microsoft Account authentication.
        Microsoft Account OAuth documentation: https://dev.onedrive.com/auth/msa_oauth.htm
        """
        return pulumi.get(self, "microsoft_account_client_secret")

    @property
    @pulumi.getter(name="microsoftAccountClientSecretSettingName")
    def microsoft_account_client_secret_setting_name(self) -> Optional[str]:
        """
        The app setting name containing the OAuth 2.0 client secret that was created for the
        app used for authentication.
        """
        return pulumi.get(self, "microsoft_account_client_secret_setting_name")

    @property
    @pulumi.getter(name="microsoftAccountOAuthScopes")
    def microsoft_account_o_auth_scopes(self) -> Optional[Sequence[str]]:
        """
        The OAuth 2.0 scopes that will be requested as part of Microsoft Account authentication.
        This setting is optional. If not specified, "wl.basic" is used as the default scope.
        Microsoft Account Scopes and permissions documentation: https://msdn.microsoft.com/en-us/library/dn631845.aspx
        """
        return pulumi.get(self, "microsoft_account_o_auth_scopes")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Resource Name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="runtimeVersion")
    def runtime_version(self) -> Optional[str]:
        """
        The RuntimeVersion of the Authentication / Authorization feature in use for the current app.
        The setting in this value can control the behavior of certain features in the Authentication / Authorization module.
        """
        return pulumi.get(self, "runtime_version")

    @property
    @pulumi.getter(name="systemData")
    def system_data(self) -> 'outputs.SystemDataResponse':
        """
        The system metadata relating to this resource.
        """
        return pulumi.get(self, "system_data")

    @property
    @pulumi.getter(name="tokenRefreshExtensionHours")
    def token_refresh_extension_hours(self) -> Optional[float]:
        """
        The number of hours after session token expiration that a session token can be used to
        call the token refresh API. The default is 72 hours.
        """
        return pulumi.get(self, "token_refresh_extension_hours")

    @property
    @pulumi.getter(name="tokenStoreEnabled")
    def token_store_enabled(self) -> Optional[bool]:
        """
        <code>true</code> to durably store platform-specific security tokens that are obtained during login flows; otherwise, <code>false</code>.
         The default is <code>false</code>.
        """
        return pulumi.get(self, "token_store_enabled")

    @property
    @pulumi.getter(name="twitterConsumerKey")
    def twitter_consumer_key(self) -> Optional[str]:
        """
        The OAuth 1.0a consumer key of the Twitter application used for sign-in.
        This setting is required for enabling Twitter Sign-In.
        Twitter Sign-In documentation: https://dev.twitter.com/web/sign-in
        """
        return pulumi.get(self, "twitter_consumer_key")

    @property
    @pulumi.getter(name="twitterConsumerSecret")
    def twitter_consumer_secret(self) -> Optional[str]:
        """
        The OAuth 1.0a consumer secret of the Twitter application used for sign-in.
        This setting is required for enabling Twitter Sign-In.
        Twitter Sign-In documentation: https://dev.twitter.com/web/sign-in
        """
        return pulumi.get(self, "twitter_consumer_secret")

    @property
    @pulumi.getter(name="twitterConsumerSecretSettingName")
    def twitter_consumer_secret_setting_name(self) -> Optional[str]:
        """
        The app setting name that contains the OAuth 1.0a consumer secret of the Twitter
        application used for sign-in.
        """
        return pulumi.get(self, "twitter_consumer_secret_setting_name")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Resource type.
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="unauthenticatedClientAction")
    def unauthenticated_client_action(self) -> Optional[str]:
        """
        The action to take when an unauthenticated client attempts to access the app.
        """
        return pulumi.get(self, "unauthenticated_client_action")

    @property
    @pulumi.getter(name="validateIssuer")
    def validate_issuer(self) -> Optional[bool]:
        """
        Gets a value indicating whether the issuer should be a valid HTTPS url and be validated as such.
        """
        return pulumi.get(self, "validate_issuer")


class AwaitableListWebAppAuthSettingsSlotResult(ListWebAppAuthSettingsSlotResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return ListWebAppAuthSettingsSlotResult(
            aad_claims_authorization=self.aad_claims_authorization,
            additional_login_params=self.additional_login_params,
            allowed_audiences=self.allowed_audiences,
            allowed_external_redirect_urls=self.allowed_external_redirect_urls,
            auth_file_path=self.auth_file_path,
            client_id=self.client_id,
            client_secret=self.client_secret,
            client_secret_certificate_thumbprint=self.client_secret_certificate_thumbprint,
            client_secret_setting_name=self.client_secret_setting_name,
            default_provider=self.default_provider,
            enabled=self.enabled,
            facebook_app_id=self.facebook_app_id,
            facebook_app_secret=self.facebook_app_secret,
            facebook_app_secret_setting_name=self.facebook_app_secret_setting_name,
            facebook_o_auth_scopes=self.facebook_o_auth_scopes,
            git_hub_client_id=self.git_hub_client_id,
            git_hub_client_secret=self.git_hub_client_secret,
            git_hub_client_secret_setting_name=self.git_hub_client_secret_setting_name,
            git_hub_o_auth_scopes=self.git_hub_o_auth_scopes,
            google_client_id=self.google_client_id,
            google_client_secret=self.google_client_secret,
            google_client_secret_setting_name=self.google_client_secret_setting_name,
            google_o_auth_scopes=self.google_o_auth_scopes,
            id=self.id,
            is_auth_from_file=self.is_auth_from_file,
            issuer=self.issuer,
            kind=self.kind,
            microsoft_account_client_id=self.microsoft_account_client_id,
            microsoft_account_client_secret=self.microsoft_account_client_secret,
            microsoft_account_client_secret_setting_name=self.microsoft_account_client_secret_setting_name,
            microsoft_account_o_auth_scopes=self.microsoft_account_o_auth_scopes,
            name=self.name,
            runtime_version=self.runtime_version,
            system_data=self.system_data,
            token_refresh_extension_hours=self.token_refresh_extension_hours,
            token_store_enabled=self.token_store_enabled,
            twitter_consumer_key=self.twitter_consumer_key,
            twitter_consumer_secret=self.twitter_consumer_secret,
            twitter_consumer_secret_setting_name=self.twitter_consumer_secret_setting_name,
            type=self.type,
            unauthenticated_client_action=self.unauthenticated_client_action,
            validate_issuer=self.validate_issuer)


def list_web_app_auth_settings_slot(name: Optional[str] = None,
                                    resource_group_name: Optional[str] = None,
                                    slot: Optional[str] = None,
                                    opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableListWebAppAuthSettingsSlotResult:
    """
    Use this data source to access information about an existing resource.

    :param str name: Name of the app.
    :param str resource_group_name: Name of the resource group to which the resource belongs.
    :param str slot: Name of the deployment slot. If a slot is not specified, the API will get the settings for the production slot.
    """
    __args__ = dict()
    __args__['name'] = name
    __args__['resourceGroupName'] = resource_group_name
    __args__['slot'] = slot
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:web/v20200901:listWebAppAuthSettingsSlot', __args__, opts=opts, typ=ListWebAppAuthSettingsSlotResult).value

    return AwaitableListWebAppAuthSettingsSlotResult(
        aad_claims_authorization=__ret__.aad_claims_authorization,
        additional_login_params=__ret__.additional_login_params,
        allowed_audiences=__ret__.allowed_audiences,
        allowed_external_redirect_urls=__ret__.allowed_external_redirect_urls,
        auth_file_path=__ret__.auth_file_path,
        client_id=__ret__.client_id,
        client_secret=__ret__.client_secret,
        client_secret_certificate_thumbprint=__ret__.client_secret_certificate_thumbprint,
        client_secret_setting_name=__ret__.client_secret_setting_name,
        default_provider=__ret__.default_provider,
        enabled=__ret__.enabled,
        facebook_app_id=__ret__.facebook_app_id,
        facebook_app_secret=__ret__.facebook_app_secret,
        facebook_app_secret_setting_name=__ret__.facebook_app_secret_setting_name,
        facebook_o_auth_scopes=__ret__.facebook_o_auth_scopes,
        git_hub_client_id=__ret__.git_hub_client_id,
        git_hub_client_secret=__ret__.git_hub_client_secret,
        git_hub_client_secret_setting_name=__ret__.git_hub_client_secret_setting_name,
        git_hub_o_auth_scopes=__ret__.git_hub_o_auth_scopes,
        google_client_id=__ret__.google_client_id,
        google_client_secret=__ret__.google_client_secret,
        google_client_secret_setting_name=__ret__.google_client_secret_setting_name,
        google_o_auth_scopes=__ret__.google_o_auth_scopes,
        id=__ret__.id,
        is_auth_from_file=__ret__.is_auth_from_file,
        issuer=__ret__.issuer,
        kind=__ret__.kind,
        microsoft_account_client_id=__ret__.microsoft_account_client_id,
        microsoft_account_client_secret=__ret__.microsoft_account_client_secret,
        microsoft_account_client_secret_setting_name=__ret__.microsoft_account_client_secret_setting_name,
        microsoft_account_o_auth_scopes=__ret__.microsoft_account_o_auth_scopes,
        name=__ret__.name,
        runtime_version=__ret__.runtime_version,
        system_data=__ret__.system_data,
        token_refresh_extension_hours=__ret__.token_refresh_extension_hours,
        token_store_enabled=__ret__.token_store_enabled,
        twitter_consumer_key=__ret__.twitter_consumer_key,
        twitter_consumer_secret=__ret__.twitter_consumer_secret,
        twitter_consumer_secret_setting_name=__ret__.twitter_consumer_secret_setting_name,
        type=__ret__.type,
        unauthenticated_client_action=__ret__.unauthenticated_client_action,
        validate_issuer=__ret__.validate_issuer)
